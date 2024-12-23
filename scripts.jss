// Event listener for "Book a Session" button
document.getElementById("bookSessionBtn").addEventListener("click", function () {
    const newPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Book a Session</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color:rgb(68, 47, 47);
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
               

                .form-container {
                    background-color:rgb(202, 186, 186);
                    border: 2px solid #007BFF;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    width: 350px;
                }
                .form-container h2 {
                    color: #007BFF;
                    text-align: center;
                }
                .form-container input, .form-container select, .form-container button {
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 14px;
                }
                .form-container button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                .form-container button:hover {
                    background-color: #0056b3;
                }
            </style>
           </head>
        <body>
            <div class="form-container">
                <h2>Book a Photography Session</h2>
                <form id="bookingForm">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="tel" name="phone" placeholder="Your Phone Number" required>
                    <input type="email" name="email" placeholder="Your Email ID" required>
                    <select name="category" required>
                        <option value="" disabled selected>Select Photography Type</option>
                        <option value="Portrait">Portrait</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Events">Events</option>
                        <option value="Wildlife">Wildlife</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank"); // Open a new tab
    newWindow.document.write(newPageContent);    // Write the content to the new tab
    newWindow.document.close();                 // Close the document stream
});
