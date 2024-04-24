
const isDebugMode = () => {
  const nodeEnv = process.env.NODE_ENV;
  const debugMode = nodeEnv 
  if (debugMode  === 'development') {
    console.log(`Debug mode: ${debugMode}`);
    return true
  } else {
      console.log(`Current NODE_ENV: ${nodeEnv}`);
    return false;
  }

};
isDebugMode()

function encodeToBase64(...args) {
  const data = args.join(':'); 
  try {
    const encodedData = Buffer.from(data).toString('base64');
    console.log('Data to be encoded to Base64:', encodedData)
    return encodedData;
  } catch (error) {
    console.error('Error encoding to Base64:', error.message);
    return null;
  }
}
encodeToBase64('mather', 'father')

function encodeToHex(...args) {
  const data = args.join(':');
  try {
    const encodedData = Buffer.from(data, 'utf-8').toString('hex');
    console.log('Data to be encoded to Hex:', encodedData);
    return encodedData;
  } catch (error) {
    console.error('Error encoding to Hex:', error.message);
    return null;
  }
}
encodeToHex('mather', 'father')

function decodeFromBase64(base64String) {

  try {
    const decodedData = Buffer.from(base64String, 'base64').toString('utf-8');
    console.log('Data to be decoded from Base64:', decodedData);
    return decodedData;
  } catch (error) {
    console.error('Error decoding from Base64:', error.message);
    return null;
  }
}
const  base64String = 'bWF0aGVyOmZhdGhlcg=='
decodeFromBase64(base64String)



function decodeFromHex(hexString) {
  try {
    const decodedData = Buffer.from(hexString, 'hex').toString('utf-8');
    console.log('Data to be decoded from Hex:', decodedData);
    return decodedData;
  } catch (error) {
    console.error('Error decoding from Hex:', error.message);
    return null;
  }
}
const hexString = '6d61746865723a666174686572'
decodeFromHex(hexString)


function safeDecodeFromBase64(base64String) {
  try {
    const regexp = /^[a-zA-Z0-9+/]*={0,2}$/
    if (!regexp.test(base64String)) {
      throw new Error('Invalid base64 string');
    }
    const decodedData = atob(base64String);
    console.log('Base64 Decoded:', decodedData);
    return decodedData;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
safeDecodeFromBase64(base64String)


function safeDecodeFromHex(hexString) {
  try {
    const regexp = /^[0-9a-fA-F]+$/ 
    if (!regexp.test(hexString)) {
      throw new Error('Invalid hex string');
    }
    const decodedData = Buffer.from(hexString, 'hex').toString('utf8');
    console.log('Hex Decoded:', decodedData);
    return decodedData;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
safeDecodeFromHex(hexString)


export {
  isDebugMode,
  encodeToBase64,
  encodeToHex,
  decodeFromBase64,
  decodeFromHex,
  safeDecodeFromBase64,
  safeDecodeFromHex
}

const nodeEnv = process.env.NODE_ENV;
console.log(nodeEnv);