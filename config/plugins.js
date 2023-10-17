// ./config/plugins.js

module.exports = ({ env }) => ({
  backup: {
    enabled: true,
    config: {
      cronSchedule: '0 * * * *', // Run backup each hour
    }
  }
});
