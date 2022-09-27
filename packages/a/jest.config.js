/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
    return {
        coverageDirectory: `<rootDir>/coverage`,
        reporters: ['default', 'jest-sonar'],
    };
};
