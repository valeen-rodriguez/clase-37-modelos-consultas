module.exports = (sequelize, DataTypes) => {
    const alias = "Genre";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.DECIMAL(),
            allowNull: false,
            unique: true,
            unsigned: true
        },
        active: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        }
    };
    const config = {
        tableName: "genres",
        timestamps: false
    };
    const Genres = sequelize.define(alias, cols, config);
    return Genres;
}