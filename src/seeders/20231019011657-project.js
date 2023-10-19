'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Projects",
      [
        {
          title: "Siganteng",
					content:
						"Tanpa ngoding rasanya hampa, mari belajar teknologi baru untuk memajukan negeri ini, supaya proses tidak menghianati hasil, barsakit-sakit lah dahulu maka  kemudian besenang-senang kemudian",
					author: "Lebah ganteng",
					start_date: "2023-01-05",
					end_date: "2023-05-13",
					nodejs: true,
					js: true,
					react: true,
					vuejs: false,
					image: "image.png",
					postedAt: new Date(),
					createdAt: new Date(),
					updatedAt: new Date(),
        },
        {
          title: "Semut Bor Up",
					content:
						"Semut memiliki berbagai kekuatan yang sangat menegangkan, dia bisa melakukan pekerjaan yang lebih berat dari badannya, dan sifar mereka sangat suka membantu sama lain",
					author: "Semuth",
					start_date: "2023-08-05",
					end_date: "2023-09-05",
					nodejs: true,
					js: true,
					react: true,
					vuejs: false,
					image: "image.png",
					postedAt: new Date(),
					createdAt: new Date(),
					updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
