Backend Implementation of 
	1 .Implement a user registration form with authentication. Describe and implement the data validations you will use for user inputs (e.g., email, password, username).
     Stored all the user information in the mongoose database. User can login and register via these api and have created the appropriate middleweare for authorization

  2. How will you handle user authentication and session management? Implement a secure login system.
      This is handled via jwt tokens, encryption of password using bcrypt and salt generation and a jwt authenticator middleware

  3.  	Implement an image upload feature. Describe your approach and the technologies you will use to handle file uploads securely. 
      This is done by using multer to store the image file on the server's disk storage. User can update the profile picture and it will be updated correspondingly
  4. For image compression and resizing some external library could have been used like ffmped in video streaming. 
