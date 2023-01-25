import React, { FC } from 'react';
//styles
import { Container, AccessCode, Image, ImageContainer } from './access.styles';
//types
import { AccessProps } from '../../components/index.types';
//utils
import { barCodeTypesImage } from '../../components/index.utils';

const Access: FC<AccessProps> = (props) => {
  //props
  const { accessType, accessCodeId, accessImage } = props;
  //render
  const renderAccessImage = () => {
    if (accessImage) {
      return <Image src={accessImage} alt={accessType} type={accessType} />;
    }
    if (!accessImage) {
      return barCodeTypesImage(accessType);
    } else return null;
  };

  return (
    <Container type={accessType}>
      <ImageContainer>{renderAccessImage()}</ImageContainer>
      {accessCodeId && (
        <AccessCode type={accessType}>{accessCodeId}</AccessCode>
      )}
    </Container>
  );
};

export default Access;
