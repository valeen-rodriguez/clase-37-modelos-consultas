module.exports = (sequelize,DataTypes) => {
    const alias = "Movies";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unsigned: true,
            primaryKey:true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type:DataTypes.DATE,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1),
            allowNull: false,
            unsigned: true
        },
        awards: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unsigned: true
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unsigned: true
        }
    };
    const config = {
        tableName:"movies",
        timestamps: false
    };
    const Movies = sequelize.define(alias, cols, config);
    return Movies;
}