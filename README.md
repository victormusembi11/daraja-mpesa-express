# daraja-mpesa-express

Get the users phone number from React app and make an API call w/ Node Js to Daraja to make STK push on users mobile phone.

## Server Environment variables

Create a **.env** file in the **server directory** and add the following variables:

```bash
CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
SHORTCODE=your_shortcode
PASSKEY=your_passkey
```

**Brief explanation of the environment variables:**

- The consumer secret and consumer key are gotten from the safaricom developer portal. The credentials are used to generate a token that is used to authenticate the API call to Daraja.

- The shortcode is the paybill number that is used to receive the payment.

- The passkey is a password that is used to encrypt the request payload.

## Install dependencies

Change directory to the server folder ```cd server``` and install the dependencies. Same for the client folder ```cd client```.

```bash
npm install
```

## Run the server

Change directory to the server folder ```cd server``` and run the server.

```bash
npm start
```

## Run the client

Change directory to the client folder ```cd client``` and run the client.

```bash
npm start
```
