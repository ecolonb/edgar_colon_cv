import React from "react";
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFacebook
} from "react-icons/fa";
import { P, Link, ImgProfile } from "./styles";

export const Location = ({ children }) => {
  return (
    <P>
      <FaLocationArrow />
      <span>{children}</span>
    </P>
  );
};

export const Email = ({ children }) => {
  return (
    <P>
      <FaEnvelope />
      <span>{children}</span>
    </P>
  );
};

export const Phone = ({ children }) => {
  return (
    <P>
      <FaPhone />
      <span>{children}</span>
    </P>
  );
};

export const Linkedin = ({ url }) => {
  return (
    <P>
      <Link href={url}>
        <FaLinkedin /> Linkedin
      </Link>
    </P>
  );
};

export const Facebook = ({ url }) => {
  return (
    <P>
      <Link href={url}>
        <FaFacebook /> Facebook
      </Link>
    </P>
  );
};

export const ImageProfile = ({ url, alt }) => {
  return <ImgProfile src={url} alt={alt} />;
};
