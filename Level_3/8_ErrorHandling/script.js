const customError = new Error("This is a custom error");
customError.name = "CustomErrors";
try {
   throw customError;
} catch (err) {
   console.log(err);
}