const jwt = require('jsonwebtoken');
const RefreshToken = require('../models/refreshToken');

const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET || 'your-access-token-secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your-refresh-token-secret';

const ACCESS_TOKEN_EXPIRY = '15m'; // 15 minutes
const REFRESH_TOKEN_EXPIRY = '7d'; // 7 days

const tokenUtils = {
  generateTokens: async (userId) => {
    // Generate access token
    const accessToken = jwt.sign(
      { userId },
      ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRY }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { userId },
      REFRESH_TOKEN_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRY }
    );

    // Save refresh token to database
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

    await RefreshToken.create({
      token: refreshToken,
      user: userId,
      expiresAt,
    });

    return {
      accessToken,
      refreshToken,
    };
  },

  verifyAccessToken: (token) => {
    try {
      return jwt.verify(token, ACCESS_TOKEN_SECRET);
    } catch (error) {
      return null;
    }
  },

  verifyRefreshToken: async (token) => {
    try {
      const decoded = jwt.verify(token, REFRESH_TOKEN_SECRET);
      
      // Check if token exists and is not revoked
      const refreshToken = await RefreshToken.findOne({
        token,
        isRevoked: false,
      });

      if (!refreshToken) {
        return null;
      }

      return decoded;
    } catch (error) {
      return null;
    }
  },

  revokeRefreshToken: async (token) => {
    await RefreshToken.updateOne(
      { token },
      { isRevoked: true }
    );
  },

  revokeAllUserTokens: async (userId) => {
    await RefreshToken.updateMany(
      { user: userId, isRevoked: false },
      { isRevoked: true }
    );
  },
};

module.exports = tokenUtils; 