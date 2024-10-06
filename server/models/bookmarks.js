module.exports = (sequelize, DataTypes) => {
    
    const Bookmarks = sequelize.define('Bookmarks', {
        URL: {
            type: DataTypes.STRING,
        },
        Rating: {
            type: DataTypes.STRING,
        }, 
        Progress: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Website: {
            type: DataTypes.STRING
        },
        Status: {
            type: DataTypes.STRING
        },
        Plot: {
            type: DataTypes.STRING
        },
        Type: {
            type: DataTypes.STRING
        },
        Notes: {
            type: DataTypes.STRING
        },
        LastRead: {
            type: DataTypes.STRING
        },
        Added: {
            type: DataTypes.STRING
        }
    })
    return Bookmarks
}