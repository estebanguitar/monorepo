import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1711697002713 implements MigrationInterface {
    name = 'Init1711697002713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`store\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`status\` int NOT NULL, \`ownerId\` int NOT NULL, \`openDate\` datetime NOT NULL, \`closeDate\` datetime NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`owner\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`store\` ADD CONSTRAINT \`FK_a83068090fe4511e5047484b09a\` FOREIGN KEY (\`ownerId\`) REFERENCES \`owner\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`store\` DROP FOREIGN KEY \`FK_a83068090fe4511e5047484b09a\``);
        await queryRunner.query(`DROP TABLE \`owner\``);
        await queryRunner.query(`DROP TABLE \`store\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
