import jwt from "jsonwebtoken";

const privateKey = 'guessit';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    
    // TODO: remove the following log.
    console.log("token: %s", token);

    let decodedData;

    if (token) {      
      decodedData = jwt.verify(token, privateKey);
      req.userId = decodedData?.id;
    }   

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;