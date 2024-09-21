(async () => {
    
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'Username',
            password: 'Password',
            database: 'Database'
        });

        const ratingDAO = new RatingDAO(connection);

        // Adding a new rating
        const newRating = new Rating(1, 5, 101);
        await ratingDAO.addRating(newRating);

        // Fetching a rating by ID
        const rating = await ratingDAO.getRatingById(1);
        console.log(`Rating: ${rating.rate}, File ID: ${rating.fileID}`);

        // Fetching all ratings for a specific file
        const ratings = await ratingDAO.getRatingsByFileID(101);
        ratings.forEach(r => console.log(`Rating ID: ${r.ratingID}, Rate: ${r.rate}`));

        // Updating a rating
        rating.rate = 4;
        await ratingDAO.updateRating(rating);

        // Deleting a rating
        await ratingDAO.deleteRating(1);

        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
})();
