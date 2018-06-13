// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'daily_task',
      user:     'postgres',
      password: 'pavel228'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL + '?ssl=true',
      user:     'postgres',
      password: 'pavel228'
    },
  }
};
