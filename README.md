# react-wallets

> iOS and Android wallet passes for ReactJs created with create-react-library.

[![NPM](https://img.shields.io/npm/v/react-wallets.svg)](https://www.npmjs.com/package/react-wallets) ![version](https://img.shields.io/badge/node->=10.0.0-brightgreen.svg) ![version](https://img.shields.io/badge/react->=16.8.0-brightgreen.svg) [![typescript](https://img.shields.io/badge/Built_with-TypeScript-blue.svg)](https://www.typescriptlang.org/) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

A React.js library for generating Apple and Google Wallet passes previews written in Typescript and Styled components.

## iOS and Android live examples

[![busPass.gif](https://s3.gifyu.com/images/busPass.gif)](https://gifyu.com/image/Sm9Pu) [![cinemaPass.gif](https://s3.gifyu.com/images/cinemaPass.gif)](https://gifyu.com/image/Sm9X5)

## Supported passes in iOS and Android

- Store pass
- Event pass
- Coupon pass
- Plane pass
- Boat pass
- Bus pass
- Train pass
- Metro/Subway pass
- Cinema/Theater pass
- Hotel pass

There are 10 types, each pass contains a front side and a back side, the front side displays relevant informations about the pass whereas the back side displays more details.

## Installation

Install with NPM or YARN:

```bash
npm install react-wallets
```

```bash
yarn add react-wallets
```

## Start with a template

A template has all the common data fields that will be shared between your passes.

- Store iOS pass example for bus

```sh
import { CardIOS } from "react-wallets";

const MyWalletComponent = () => {
return (
<CardIOS
//card-type----------
type='bus'
//styles-------------
backgroundColor='#eaf9fa'
titleColor='#1b38db'
textColor='#ab2'
//header-------------
headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
title='Number'
mainTitle='223'
//information----------
LeftTitle='calais france'
LeftValue='fr'
RightTitle='douvres royaume unis'
RightValue='uk'
topLeftTitle='departure date'
topLeftValue='24/08/2023'
topCenterLeftTitle='arrival date'
topCenterLeftValue='26/08/2023'
topRightTitle='price'
topRightValue='123$'
bottomLeftTitle='passenger'
bottomLeftValue='Alan Jason'
//access---------------
accessImage='https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png'
accessType='QR'
accessCodeId='6066e4315abbcc1f9526d392'
//details--------------
descriptionTitle='This trip is about:'
description='Exchangeable and refundable free of charge by voucher up to 8 days before your depature.'
termsAndConditionsTitle='conditions'
termsAndConditions='terms and conditions here'
/>
)}
```

- Store android pass example for event

```sh
import { CardAndroid } from "react-wallets";

const MyWalletComponent = () => {
 return (
<CardAndroid
//card-type
type='event'
//styles------------------------------
backgroundColor='#f5f5f5'
titleColor='black'
//header------------------------------
headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
title='BEST EVENT'
//title--------------------------------
mainTitle='BEST Event'
secondaryTitle='Elysee Montmartre'
//infos--------------------------------
topLeftTitle='Date'
topLeftValue='Jun 21,2023'
topRightTitle='Time'
topRightValue='11:08 AM'
bottomLeftTitle='Door'
bottomLeftValue='1'
bottomCenterTitle='Row'
bottomCenterValue='1stC'
bottomRightTitle='Place'
bottomRightValue='17B'
//access--------------------------------
accessType='CODE128'
accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
accessCodeId='5g1hdvb82154df853fca14835'
accessBorder={true}
//footer--------------------------------
bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
//details--------------------------------
holderNameTitle='full name'
holderName='Alan Jason'
place='elysee montmartre'
address='72 Street Name'
openTimeTitle='opening date / time'
openTime='2023 21st June, 11 PM'
startDateTitle='starting date / time'
startDate='27 Jul 2023 11PM'
ticketNumberTitle='ticket number'
ticketNumber='123789654'
valueTitle='price'
value='120$'
termsAndConditionsTitle='our terms'
termsAndConditions='this are the terms and conditions'
googleMapsLink='link here'
phoneNumber='+33 555 555'
email='email-email.com'
disableNotifications='disable notifications'
/>
)}
```

## Passes examples

You can find [here](https://docs.google.com/document/d/12k5fYnAxX4EhEjpdQUFDeRYCucSSBLP27G_ZaKhHcfs/edit) full examples of all passes with some fake data !

## API

This a list of props that you can pass down to the component, all of them are of type **string**:
| Property | Description |Pass |Platform
| --- | ------ |------ | ----------- |
|`type` | takes one of these pass types : store/event/coupon/plane/boat/bus/subway/train/cinema/room.**Required**|all |iOS-Android
|`backgroundColor` | takes pass backgorund color |all | iOS-Android
|`titleColor` | takes pass title's color| all|iOS
|`textColor` |takes pass title's value color| all|iOS
|`title` |displaying subtitle | store/coupon/plane/boat/bus/subway/train -- all|iOS-Android
|`headerLogoLink` |takes logo url |all|iOS-Android
|`headerTitle` |displaying pass title |store/coupon/plane/event/cinema/room |iOS-Android
|`mainTitle` | displaying the main title |store/coupon/plane-room/event/cinema/coupon/store |iOS-Android
|`accessType` | takes on of these code types :QR/CODE128/PDF417/AZTEC. **Required** |all |Android
|`accessImage` |takes code image url |all| iOS-Android
|`accessBorder` | displaying a colored and animated border for security. **boolean type** |all| iOS-Android
|`accessCodeId` | takes codes id|all |Android
|`accessCodeIdTitle` | displaying a custom title for the access code id. default value **barcode**|store | iOS
|`bannerImage` | takes banner or footer image url |store/event/coupon/room/cinema -- train/subway/bus/boat/plane | iOS-Android
|`bottomCenterTitle` |displaying a title |room| iOS
|`bottomCenterValue` | displaying a value|room| iOS
|`bottomLeftTitle` |displaying a title |all -- train/subway/bus/boat/event/cinema/plane | iOS-Android
|`bottomLeftValue` | displaying a value|all -- train/subway/bus/boat/event/cinema/plane | iOS-Android
|`bottomRightTitle` |displaying a title |store/coupon/event/plane/room/cinema -- evet/cinema/plane | iOS-Android
|`bottomRightValue` |displaying a value|store/coupon/event/plane/room/cinema -- evet/cinema/plane | iOS-Android
|`LeftTitle` |displaying a title |plane/boat/bus/subway/train | iOS
|`LeftValue` | displaying a value|plane/boat/bus/subway/train | iOS
|`RightTitle` | displaying a title |plane/boat/bus/subway/train| iOS
|`RightValue` |displaying a value|plane/boat/bus/subway/train | iOS
|`topCenterLeftTitle` | displaying a title |event/plane/boat/bus/subway/train/cinema | iOS
|`topCenterLeftValue` |displaying a value|event/plane/boat/bus/subway/train/cinema | iOS
|`topCenterRightTitle` |displaying a title |plane/cinema| iOS
|`topCenterRightValue` | displaying a value|plane/cinema| iOS
|`topCenterTitle` |displaying a title |plane/room |Android
|`topCenterValue` |displaying a value |plane/room | Android
|`topLeftTitle` |displaying a title |event/plane/boat/bus/subway/train/room/cinema -- room/boat/bus/subway/train/event/cinema/plane/store | iOS-Android
|`topLeftValue` |displaying a value|event/plane/boat/bus/subway/train/room/cinema -- room/boat/bus/subway/train/event/cinema/plane/store | iOS-Android
|`topRightTitle` |displaying a title | event/plane/boat/bus/subway/train/cinema-boat/bus/subway/train/event/cinema/plane/store/room | iOS-Android
|`topRightValue` |displaying a value|event/plane/boat/bus/subway/train/cinema -- boat/bus/subway/train/event/cinema/plane/store/room | iOS-Android
|`mainTitle`|displaying a title |store/coupon/plane-room/event/cinema/coupon/store|iOS-Android
|`secondaryTitle`|displaying a title |room/event/cinema |Android
|`composedMainTitle:{from - to}` | displaying a title |boat/bus/subway/train/plane|Android
|`composedSecondaryTitle:{from - to}` | displaying a title |boat/bus/subway/train/plane |Android
|`address`| displaying a physical address |store/event/cinema/room | iOS-Android
|`addressTitle`| displaying a custom title for the address value. default value **address** |store -- store/room |iOS-Android
|`arrivalGate` |displaying arrival gate number |plane|iOS-Android
|`arrivalGateTitle` |displaying a custom title for the arrival gate. default value **arrival code**|plane|Android
|`arrivingTitle` |displaying a custom title for the arriving time value. default value **arriving at**|boat -- boat/bus/train/subway|iOS-Android
|`checkInTitle` |displaying a custom title for the check in time. default value **check in** |room|iOS-Android
|`checkOutTitle` |displaying a custom title for the check out time value. default value **check out** |room|iOS-Android
|`confirmationCode` |displaying confirmation code |plane|iOS-Android
|`confirmationCodeTitle` |displaying a custom title for the confirmation code value. default value **confirmation code** |plane|iOS-Android
|`couponId` |displaying coupon id value|store/coupon -- coupon| iOS-Android
|`couponIdTitle` |displaying a custom title for the coupon ID value. default value **coupon** |store/coupon -- coupon| iOS-Android
|`customTitle` |displaying a custom title |cinema/store -- store | iOS-Android
|`customTitlePhone` |displaying a custom title for phone number |store | iOS-Android
|`customValue` | displaying a custom valuestore | iOS-Android
|`date` |displaying date |store | iOS-Android
|`departureTitle` |displaying a custom title for the departure time/date value. default value **departure** |boat -- boat/bus/train/subway| iOS-Android
|`description` |displaying a description |store/coupon/plane/boat/bus/subway/train -- store/coupon | iOS-Android
|`descriptionTitle` |displaying a custom title for the description value. default value **description** |coupon/boat/bus/subway/train -- coupon | iOS-Android
|`destinationTerminal`| displaying destination terminal number|plane | iOS-Android
|`destinationTerminalTitle`|displaying a custom title for the destination terminal value. default value **destination terminal** |plane | Android
|`details` | displaying written details |boat/bus/subway/train/plane/| iOS-Android
|`detailsTitle` | displaying a custom title for the details value. default value **details**|boat/bus/train/subway|Android
|`disableNotifications` | displaying disable notification text|boat/bus/subway/train/room/plane |Android
|`email` |displaying email |event/cinema/room/event | iOS-Android
|`emailTitle` |displaying a custom title for the email value. default value **email**|event/cinema/room |iOS
|`endDate` | displaying end date or hour |event/boat/cinema/room -- room/store/cinema/boat/bus/subway/train/room | iOS-Android
|`endDateTitle` |displaying a custom title for the end date value. default value **end date**|event/cinema -- cinema| iOS-Android
|`eventName` | displaying event name |event| iOS-Android
|`expires`| displaying date of expiry|coupon | iOS-Android
|`expiresTitle`| displaying a custom title for the expires value. default value **expires**|coupon |Android
|`flightDetailsTitle`| displaying a custom title for the flight details value. default value **flight details**|plane |iOS-Android
|`flightNumber` | displaying flight number| plane|iOS-Android
|`flightNumberTitle` | displaying a custom title for the flight number value. default value **flight number**| plane|Android
|`from` |displaying coupon marketer|coupon |iOS-Android
|`fromTitle` |displaying a custom title for the fromvalue. default value **from**|coupon |Android
|`googleMapsLink`|displaying a custom title for the from value. default value **google maps link**|event| iOS
|`googleMapsLinkTitle`|takes google maps url |event -- event/cinema/boat/bus/subway/train | iOS-Android
|`holderId` |displaying pass holder id |store| iOS-Android
|`holderLastName` | displaying pass holder last name|store |iOS-Android
|`holderName` |displaying pass holder name |store/room -- store/event/cinema/room |iOS-Android
|`holderNameTitle` |displaying a custom title for the ticket holder name. default value **ticket holder**|room -- event/cinema/room |iOS-Android
|`kind` | displaying kind| room/store | iOS-Android
|`kindTitle` | displaying a custom title for the room type. default value **type**| event/room | iOS-Android
|`movieName` |displaying movie name |cinema | iOS-Android
|`movieNameTitle` |displaying a custom title for the movie name value. default value **movie name**|cinema | iOS-Android
|`number` |displaying a number value |boat/bus/subway/train| iOS-Android
|`numberTitle` |displaying a custom title for a number value. default value **number**|boat/bus/subway/train| Android
|`offersTitle` |displaying a custom title for the offers value. default value **offers**|store| iOS
|`offerId` | displaying offer code id|store | iOS-Android
|`openTime` |displaying opening time|event/cinema | iOS-Android
|`openTimeTitle` |displaying a custom title for the open doors/time value. default value **doors open**|event/cinema | iOS-Android
|`phoneNumber` |displaying primary phone number|store/event/cinema/boat/room -- store/event/cinema/boat/bus/subway/train/room/plane |iOS-Android
|`phoneNumberTitle` |displaying a custom title for the phone number value. default value **phone number**|store/event/boat/cinema/room -- store|iOS-Android
|`phoneNumberSecondary` | displaying secondary phone number|store | iOS-Android
|`phoneNumberSecondaryTitle` |displaying a custom title for the secondary phone number value. default value **after sale service**|store -- store|iOS-Android
|`place` |displaying a place name or an address |cinema/room/event | iOS-Android
|`price`| displaying price value|event/boat -- boat/bus/subway/train | iOS-Android
|`priceTitle`| displaying a custom title for the price value. default value **price**|event/boat -- boat/bus/subway/train | iOS-Android
|`promoCode` | displaying promotion code id|coupon | iOS-Android
|`promoCodeTitle` |displaying a custom title for the promo code value. default value **promo code**|coupon | iOS-Android
|`rating`|displaying movie rating |cinema| iOS-Android
|`ratingTitle`|displaying a custom title for the rating value. default value **rating** |cinema| iOS-Android
|`schedule` |displaying a schedule |store | iOS-Android
|`scheduleTitle` |displaying a custom title for the schedule value. default value **schedule** |store | iOS-Android
|`scheduledDepartureTime` | displaying scheduled departure time| plane| iOS-Android
|`scheduledDepartureTimeTitle` |displaying a custom title for the schedule departure time value. default value **scheduled departure time**| plane| Android
|`startDate` |displaying start date or hour |event/boat/cinema/room -- store/event/cinema/boat/bus/subway/train/room | iOS-Android
|`startDateTitle` |displaying a custom title for the start date value. default value **start date** |event/boat/cinema/room -- store/event/cinema/boat/bus/subway/train/room | iOS-Android
|`termsAndConditions` | displaying terms and conditions text|event/boat/cinema/room/bus/subway/train -- event/cinema/room | iOS-Android
|`termsAndConditionsTitle` |displaying a custom title for the terms and conditions value. default value **terms and conditions**|event/boat/cinema/room/bus/subway/train -- event/cinema/room | iOS-Android
|`ticketImage`| takes ticket image url|boat/bus/subway/train/plane | iOS-Android
|`ticketNumber`| displaying ticket number| event/boat/cinema/room -- event/cinema| iOS-Android
|`ticketNumberTitle`|displaying a custom title for the ticket number value. default value **ticket number**| event/boat/cinema/room -- event/cinema| iOS-Android
|`value`|displaying a value |event/coupon |Android
|`valueTitle`|displaying a custom title for a value. default value **value**|event/coupon |Android
|`walletImage` | takes wallet image url | coupon| Android
|`website` | takes the website link value | store|iOS
|`websiteTitle` |displaying a custom title for the website value. default value **website** | store| iOS

## License

MIT © [astrolab](https://github.com/astrolab)
