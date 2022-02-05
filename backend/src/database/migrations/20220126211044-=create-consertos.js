'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('consertos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primarykey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            dono: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            contato: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },

        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('consertos');


    }
};