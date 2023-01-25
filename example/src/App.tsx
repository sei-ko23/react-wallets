import React from 'react';
import { CardIOS, CardAndroid } from 'react-wallets';
import 'react-wallets/dist/index.css';
import './assets/fonts/ProductSansRegular.ttf';

const App = () => {
  console.log();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/*store pass */}
        <CardIOS
          //card type----------
          type='store'
          //styles-------------
          backgroundColor='#DAE5E7'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          headerTitle='Best - Demo'
          title='0.00$'
          mainTitle='Silver'
          //banner---------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //information----------
          bottomLeftTitle='date'
          bottomLeftValue='12/26/2022'
          bottomRightTitle='rewards'
          bottomRightValue='0.00$'
          //access---------------
          accessImage='https://bestwallet.demo.orgazone.fr/static/media/barcode.cf60e99c7859037919f8.png'
          accessType='QR'
          accessCodeId='6066e4315abbcc1f9526d392'
          //details--------------
          customTitle='READY TO WEAR FOR MEN AND WOMEN'
          customTitlePhone='BEST - DEMO RESPOND TO YOU ON:'
          address='65 St. Germain Street'
          couponId='no coupons'
          description='Come and discover ourcollections of well- known and recognized brands and our other little nuggets ...'
          holderName='Alan'
          holderLastName='Jason'
          offerId='no offers'
          phoneNumber='01.93.62.36.64'
          phoneNumberSecondary='01.93.62.36.64'
          schedule='....'
          kind='silver'
          website='https://bestwallet.fr'
        />
        {/*event pass */}
        <CardIOS
          //card type----------
          type='event'
          //styles-------------
          backgroundColor='#f9f2ed'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          headerTitle='Best EVENT'
          //banner---------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //information----------
          topLeftTitle='door'
          topLeftValue='1'
          topCenterLeftTitle='row'
          topCenterLeftValue='1stC'
          topRightTitle='place'
          topRightValue='17B'
          bottomLeftTitle='ticket holder'
          bottomLeftValue='Alan Jason'
          bottomRightTitle='date'
          bottomRightValue='23/11/2022 at 12:40 AM'
          //access---------------
          accessImage='https://bestwallet.demo.orgazone.fr/static/media/barcode.cf60e99c7859037919f8.png'
          accessType='CODE128'
          accessCodeId='6066e4315abbcc1f9526d392'
          //details--------------
          eventName='Best event'
          address='Élysée Montmartre'
          openTime='2023-06-21T10:08:25Z'
          startDate='27 Jul 2077 19:00'
          endDate='27 Jul 2077 22:00'
          ticketNumber='6066e4315abbcc1f9526d392'
          price='100$'
          termsAndConditions='Only for the BEST'
          googleMapsLink='https://www.google.com/maps?q=0,0'
          phoneNumber='+33996521452'
          email='contact@orgazone.fr'
        />

        {/*coupon pass */}
        <CardIOS
          //card type----------
          type='coupon'
          //styles-------------
          backgroundColor='#f7f3ff'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          headerTitle='Best Coupon'
          title='Alan'
          mainTitle='Jason'
          //banner---------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //information----------
          bottomLeftTitle='value'
          bottomLeftValue='77$'
          bottomRightTitle='expiration date'
          bottomRightValue='27/07/2023'
          //access---------------
          accessImage='https://bestwallet.demo.orgazone.fr/static/media/barcode.cf60e99c7859037919f8.png'
          accessType='CODE128'
          accessCodeId='6066e4315abbcc1f9526d392'
          //details--------------
          description='Enjoy Your Fre Coupon by using this coupon in your favorite store'
          promoCode='B3S7D3M0'
          couponId='625e9cc9197e60007963fd7'
        />

        {/*plane pass */}
        <CardIOS
          //card type----------
          type='plane'
          //styles-------------
          backgroundColor='#eaf9fa'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          headerTitle='Best Coupon'
          title='terminal/gate'
          mainTitle='A1'
          //information----------
          LeftTitle='roissy-charles de gaulle'
          LeftValue='CDG'
          RightTitle='HEATHROW'
          RightValue='LHR'
          topLeftTitle='bording time'
          topLeftValue='11:09 am'
          topCenterLeftTitle='flight'
          topCenterLeftValue='23'
          topCenterRightTitle='class'
          topCenterRightValue='x'
          topRightTitle='date'
          topRightValue='June 21, 2023'
          bottomLeftTitle='passenger'
          bottomLeftValue='alan jason'
          bottomRightTitle='zone/region'
          bottomRightValue='c/5'
          //access---------------
          accessImage='https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png'
          accessType='QR'
          accessCodeId='6066e4315abbcc1f9526d392'
          //details--------------
          description='Have a good trip!'
          confirmationCode='123456'
        />
        {/*boat pass */}
        <CardIOS
          //card type----------
          type='boat'
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
          accessImage='https://bestwallet.demo.orgazone.fr/static/media/barcode.cf60e99c7859037919f8.png'
          accessType='CODE128'
          accessCodeId='6066e4315abbcc1f9526d392'
          //details--------------
          description='Changeable Alternate Traverse Be Flexible, Changeable Alternate Traverse Be Flexible, Changeable Alternate Traverse Be Flexible'
          startDate='24/07/2077 4:11 AM'
          endDate='24/07/2077 4:11 AM'
          ticketNumber='6066e4315abbcc1f9526d392'
          price='17$'
          termsAndConditions='Last check-in 45 minutes before departure'
          phoneNumber='+3355443322'
        />
        {/*bus pass */}
        <CardIOS
          //card type----------
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
          description='Exchangeable and refundable free of charge by voucher up to 8 days before your depature.'
          termsAndConditions='terms and conditions here'
        />
        {/*subway pass */}
        <CardIOS
          //card type----------
          type='subway'
          //styles-------------
          backgroundColor='#eaf9fa'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Number'
          mainTitle='223'
          //information----------
          LeftTitle='paris east station'
          LeftValue='par'
          RightTitle='stockholm central'
          RightValue='sto'
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
          description='details here'
          termsAndConditions='terms and conditions here'
        />
        {/*train pass */}
        <CardIOS
          //card type----------
          type='train'
          //styles-------------
          backgroundColor='#eaf9fa'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Number'
          mainTitle='223'
          //information----------
          LeftTitle='paris east station'
          LeftValue='par'
          RightTitle='stockholm central'
          RightValue='sto'
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
          description='details here'
          termsAndConditions='terms and conditions here'
        />
        {/*cinema pass */}
        <CardIOS
          //card type----------
          type='cinema'
          //styles-------------
          backgroundColor='#eaf9fa'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          headerTitle='le film'
          //banner---------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //information----------
          topLeftTitle='value'
          topLeftValue='23$'
          topCenterLeftTitle='screen'
          topCenterLeftValue='3'
          topCenterRightTitle='row'
          topCenterRightValue='ds11'
          topRightTitle='place'
          topRightValue='17b'
          bottomLeftTitle='passenger'
          bottomLeftValue='Alan Jason'
          bottomRightTitle='date'
          bottomRightValue='07/27/2023 8:00 pm'
          //access---------------
          accessImage='https://bestwallet.demo.orgazone.fr/static/media/barcode.cf60e99c7859037919f8.png'
          accessType='CODE128'
          accessCodeId='6066e4315abbcc1f9526d392'
          //details--------------
          movieName='le film'
          rating='PG-13'
          customTitle='UGC Montaparnasse'
          address='83 Boulevard Montparnasse'
          openTime='27 Jul 2077 20:00'
          startDate='27 Jul 2077 20:00'
          endDate='27 Jul 2077 20:00'
          ticketNumber='6066e4315abbcc1f9526d392'
          termsAndConditions='come on time'
          phoneNumber='+3355443322'
          email='contact@orgazone.fr'
        />
        {/*room pass */}
        <CardIOS
          //card type----------
          type='room'
          //styles-------------
          backgroundColor='#eaf9fa'
          titleColor='#1b38db'
          textColor='#ab2'
          //header-------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          headerTitle='best hotel'
          //banner---------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //information----------
          topLeftTitle='ticket holder'
          topLeftValue='Alan Jason'
          bottomLeftTitle='room'
          bottomLeftValue='323'
          bottomCenterTitle='check in'
          bottomCenterValue='23 August'
          bottomRightTitle='checkout'
          bottomRightValue='27 August'
          //access---------------
          accessImage='https://bestwallet.demo.orgazone.fr/static/media/barcode.cf60e99c7859037919f8.png'
          accessType='CODE128'
          accessCodeId='6066e4315abbcc1f9526d392'
          //details--------------
          holderName='Alan Jason'
          kind='Single'
          address='83 Boulevard Montparnasse'
          startDate='27 Jul 2077 20:00'
          endDate='27 Jul 2077 20:00'
          ticketNumber='6066e4315abbcc1f9526d392'
          termsAndConditions='come on time'
          phoneNumber='+3355443322'
          email='contact@orgazone.fr'
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* store example */}
        <h3>store example</h3>
        <CardAndroid
          //card type
          type='store'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Best - Demo'
          //title--------------------------------
          mainTitle='Store card'
          //infos--------------------------------
          topLeftTitle='Date'
          topLeftValue='09/13/2022'
          topRightTitle='Rewards'
          topRightValue='1,50$'
          //access--------------------------------
          accessType='AZTEC'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='5g1hdvb82154df853fca14835'
          //footer--------------------------------
          bannerImage='https://bestwallet-uploads.s3.eu-west-3.amazonaws.com/storecard-strip.jpg'
          //details--------------------------------
          holderName='Alan Jason'
          holderId='5g1hdvb82154df853fca14835'
          kind='Silver'
          date='09/13/2022'
          address='65 St Germain Street'
          customTitle='READY TO WEAR FOR MEN AND WOMEN'
          customValue='Come and discover ourcollections of well- known and recognized brands and our other little nuggets ...'
          startDate='10:00 AM'
          endDate='04:00 PM'
          description='no offers'
          phoneNumber='+33 888 888'
          phoneNumberSecondary='+33 999 999'
          website='https://wwww.website.com'
          disableNotifications='Disabled notifications'
        />
        {/* event example */}
        <h3>event example</h3>
        <CardAndroid
          //card type
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
          //footer--------------------------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //details--------------------------------
          holderName='Alan Jason'
          place='elysee montmartre'
          address='72 Street Name'
          openTime='2023 21st June, 11 PM'
          startDate='27 Jul 2023 11PM'
          ticketNumber='123'
          value='120$'
          termsAndConditions='this are the terms and conditions'
          googleMapsLink='link here'
          phoneNumber='+33 555 555'
          email='email-email.com'
          disableNotifications='disable notifications'
        />
        {/* coupon example */}
        <h3>coupon example</h3>
        <CardAndroid
          //card type
          type='coupon'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Best coupon'
          //title--------------------------------
          mainTitle='BEST COUPON'
          //access--------------------------------
          accessType='CODE128'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='5g1hdvb82154df853fca14835'
          //footer--------------------------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //detail-------------
          expires='Jul 27 2026, 12PM'
          from='BEST WALLET'
          walletImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          promoCode='5grde222'
          description='enjoy this coupon from us'
          value='500$'
          couponId='65487254585255vfvf558855'
          disableNotifications='disabled notifications'
        />
        {/* plane example */}
        <h3>plane example</h3>
        <CardAndroid
          //card type
          type='plane'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Best demo'
          //title--------------------------------
          composedMainTitle={{
            from: 'HND',
            to: 'ORY'
          }}
          composedSecondaryTitle={{
            from: 'Tokyo Haneda',
            to: 'Paris Orly'
          }}
          //infos--------------------------------
          topLeftTitle='Terminal/Gate'
          topLeftValue='INTL/519'
          topCenterTitle='Class'
          topCenterValue='VIP'
          topRightTitle='Departure'
          topRightValue='19:00'
          bottomLeftTitle='Passenger'
          bottomLeftValue='Alan Jason'
          bottomRightTitle='Zone/Seat'
          bottomRightValue='C5'
          //access--------------------------------
          accessType='QR'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='213555g2222222'
          //footer--------------------------------
          //details--------------------------------
          flightNumber='1XL'
          confirmationCode='1234568'
          scheduledDepartureTime='Jul 23 2025, 05 PM'
          arrivalGate='44'
          destinationTerminal='INTL'
          ticketImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          details='this are some details'
          phoneNumber='+33 222 222'
          disableNotifications='disable notifications'
        />
        {/* boat example */}
        <h3>boat example</h3>
        <CardAndroid
          //card type
          type='boat'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Best demo'
          //title--------------------------------
          composedMainTitle={{
            from: 'HND',
            to: 'ORY'
          }}
          composedSecondaryTitle={{
            from: 'Tokyo Haneda',
            to: 'Paris Orly'
          }}
          //infos--------------------------------
          topLeftTitle='Departure'
          topLeftValue='Jun 21'
          topRightTitle='Departure time'
          topRightValue='11:15 PM'
          bottomLeftTitle='Passenger'
          bottomLeftValue='Alan Poe'
          //access--------------------------------
          accessType='QR'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='12355f22222222'
          //footer--------------------------------
          //details--------------------------------
          startDate='jul 23, 03:15 AM'
          endDate='07:12PM'
          price='250$'
          number='375'
          ticketImage='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          details='details about the trip'
          googleMapsLink='link here'
          phoneNumber='+33 666 666'
          disableNotifications='disable notifications'
        />
        {/* bus example */}
        <h3>bus example</h3>
        <CardAndroid
          //card type
          type='bus'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Best demo'
          //title--------------------------------
          composedMainTitle={{
            from: 'HND',
            to: 'ORY'
          }}
          composedSecondaryTitle={{
            from: 'Tokyo Haneda',
            to: 'Paris Orly'
          }}
          //infos--------------------------------
          topLeftTitle='Departure'
          topLeftValue='Jun 21'
          topRightTitle='Departure time'
          topRightValue='11:15 PM'
          bottomLeftTitle='Passenger'
          bottomLeftValue='Alan Poe'
          //access--------------------------------
          accessType='QR'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='12355f22222222'
          //footer--------------------------------
          //details--------------------------------
          startDate='jul 23, 03:15 AM'
          endDate='07:12PM'
          price='250$'
          number='375'
          ticketImage='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          details='details about the trip'
          googleMapsLink='link here'
          phoneNumber='+33 666 666'
          disableNotifications='disable notifications'
        />
        {/* subway example */}
        <h3>subway example</h3>
        <CardAndroid
          //card type
          type='subway'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Best demo'
          //title--------------------------------
          composedMainTitle={{
            from: 'HND',
            to: 'ORY'
          }}
          composedSecondaryTitle={{
            from: 'Tokyo Haneda',
            to: 'Paris Orly'
          }}
          //infos--------------------------------
          topLeftTitle='Departure'
          topLeftValue='Jun 21'
          topRightTitle='Departure time'
          topRightValue='11:15 PM'
          bottomLeftTitle='Passenger'
          bottomLeftValue='Alan Poe'
          //access--------------------------------
          accessType='QR'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='12355f22222222'
          //footer--------------------------------
          //details--------------------------------
          startDate='jul 23, 03:15 AM'
          endDate='07:12PM'
          price='250$'
          number='375'
          ticketImage='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          details='details about the trip'
          googleMapsLink='link here'
          phoneNumber='+33 666 666'
          disableNotifications='disable notifications'
        />
        {/* train example */}
        <h3>train example</h3>
        <CardAndroid
          //card type
          type='train'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='Best demo'
          //title--------------------------------
          composedMainTitle={{
            from: 'HND',
            to: 'ORY'
          }}
          composedSecondaryTitle={{
            from: 'Tokyo Haneda',
            to: 'Paris Orly'
          }}
          //infos--------------------------------
          topLeftTitle='Departure'
          topLeftValue='Jun 21'
          topRightTitle='Departure time'
          topRightValue='11:15 PM'
          bottomLeftTitle='Passenger'
          bottomLeftValue='Alan Poe'
          //access--------------------------------
          accessType='QR'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='12355f22222222'
          //footer--------------------------------
          //details--------------------------------
          startDate='jul 23, 03:15 AM'
          endDate='07:12PM'
          price='250$'
          number='375'
          ticketImage='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          details='details about the trip'
          googleMapsLink='link here'
          phoneNumber='+33 666 666'
          disableNotifications='disable notifications'
        />
        {/* cinema example */}
        <h3>cinema example</h3>
        <CardAndroid
          //card type
          type='cinema'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='best demo'
          //title--------------------------------
          mainTitle='Movie name'
          secondaryTitle='Elysee Montmartre'
          //infos--------------------------------
          topLeftTitle='Date'
          topLeftValue='Jun 21, 2023'
          topRightTitle='Time'
          topRightValue='20h00'
          bottomLeftTitle='Value'
          bottomLeftValue='10$'
          bottomCenterTitle='Screen'
          bottomCenterValue='3'
          bottomRightTitle='Row/Place'
          bottomRightValue='ds11'
          //access--------------------------------
          accessType='CODE128'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='5g1hdvb82154df853fca14835'
          //footer--------------------------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //details--------------------------------
          holderName='Alan poe'
          place='ugc place'
          address='83 boulevard Street'
          openTime='27 jul 2023 2pm'
          startDate='27 jul 2023 2pm'
          endDate='5pm'
          ticketNumber='36545f555gg'
          termsAndConditions='terms and conditions here'
          movieName='movie name'
          rating='pg-13'
          googleMapsLink='google link'
          phoneNumber='+33 1111 111'
          email='email@example.com'
        />
        {/* room example */}
        <h3>room example</h3>
        <CardAndroid
          //card type
          type='room'
          //styles------------------------------
          backgroundColor='#f5f5f5'
          titleColor='black'
          //header------------------------------
          headerLogoLink='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'
          title='best demo'
          //title--------------------------------
          mainTitle='BEST hotel'
          secondaryTitle='Elysee Montmartre'
          //infos--------------------------------
          topLeftTitle='Room'
          topLeftValue='21'
          topCenterTitle='check in'
          topCenterValue='12/11/2023'
          topRightTitle='check out'
          topRightValue='22/11/2023'
          //access--------------------------------
          accessType='QR'
          accessImage='https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg'
          accessCodeId='5g1hdvb82154df853fca14835'
          //footer--------------------------------
          bannerImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-event-banner-design-template-392070a11089eb5fb736443db6abef83_screen.jpg?ts=1618400029'
          //detail--------------------
          holderName='Allan Poe'
          place='address title'
          address='13 Street Street'
          termsAndConditions='terms and conditions here'
          kind='Single'
          startDate='12/11/2023'
          endDate='22/11/2023'
          googleMapsLink='google link'
          phoneNumber='+33 8888 888'
          email='email@example.com'
        />
      </div>
    </div>
  );
};

export default App;
