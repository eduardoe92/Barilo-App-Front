import { ContactProps } from "@/types/HelpCenter";
import { Headphones, Globe2 } from "lucide-react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import ContactOption from "./ContactOption";
import { useTranslation } from "react-i18next";
import { FaXTwitter } from "react-icons/fa6";

const HelpCenterContact: React.FC = () => {
  const { t } = useTranslation();

  const contactItem: ContactProps[] = [
    {
      icon: <Headphones size={25} />,
      url: "https://barilo.vercel.app/",
      text: t("help.customerservice"),
    },
    {
      icon: <Globe2 size={25} />,
      url: "https://barilo.vercel.app/",
      text: t("help.webSite"),
    },
    {
      icon: <FaWhatsapp size={25} />,
      url: "https://web.whatsapp.com/",
      text: "Whatsapp",
    },
    {
      icon: <FaFacebook size={25} />,
      url: "https://www.facebook.com/",
      text: "Facebook",
    },
    {
      icon: <FaInstagram size={25} />,
      url: "https://www.instagram.com/",
      text: "Instagram",
    },
    {
      icon: <FaXTwitter size={25} />,
      url: "https://x.com/",
      text: "X",
    },
  ];

  return (
    <main className="p-4 text-customBlue w-full max-w-[550px] m-auto">
      <ul>
        {contactItem.map((con, index) => (
          <ContactOption
            key={index}
            icon={con.icon}
            url={con.url}
            text={con.text}
          />
        ))}
      </ul>
    </main>
  );
};

export default HelpCenterContact;
