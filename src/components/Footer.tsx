import Image from "next-image-export-optimizer";
import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import CSSULogo from "@/../public/cssu_logo.webp";
import {
  FOOTER_SOCIAL_SECTION,
  FOOTER_SITE_ISSUES_LINK,
  FOOTER_WORKSPACES_SECTION,
  MAILCHIMP_CONFIG,
  type SocialLink,
} from "@/config/social";

type IconHolderProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

function IconHolder({ icon, text, href }: IconHolderProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="inline-flex items-center space-x-1 text-white hover:text-gray-200
                     font-normal transition-all duration-300"
        rel="noopener noreferrer"
      >
        <span className="flex justify-center items-center h-6 w-6">{icon}</span>
        <span className="flex text-base">{text}</span>
      </a>
    </li>
  );
}

/**
 * Maps social link icon types to React Icons components
 */
function getSocialIcon(iconType: SocialLink["icon"]): React.ReactNode {
  switch (iconType) {
    case "email":
      return <FaEnvelope />;
    case "facebook":
      return <FaFacebookF />;
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedinIn />;
    case "discord":
      return <FaDiscord />;
    case "github":
      return <FaGithub />;
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="pt-12 pb-24 px-6 block text-white bg-black">
      <div className="footer-container">
        <div id="mc_embed_signup">
          <form
            // TODO: Clean up this form and make it functional
            action={MAILCHIMP_CONFIG.formAction}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll" className="space-x-1">
              <h3
                className="font-medium text-base uppercase tracking-[1px] mr-5"
                id="subscribe_title"
              >
                Join Our Mailing List!
              </h3>

              <input
                type="email"
                name="EMAIL"
                defaultValue=""
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
                control-id="ControlID-1"
              />

              <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                  type="text"
                  name={MAILCHIMP_CONFIG.hiddenInputName}
                  tabIndex={-1}
                  defaultValue=""
                  control-id="ControlID-2"
                />
              </div>

              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="font-medium text-base mr-5 cursor-pointer
                                    transition-all duration-[0.5s] tracking-[normal]
                                    normal-case bg-white text-black box-border h-8 leading-8
                                    inline-block ease-[ease-in-out] delay-[0s] m-0 px-[18px]
                                    py-0 rounded-[3px] border-[none] hover:bg-[#e8e8e8]
                                    hover:cursor-pointer"
                  control-id="ControlID-3"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="ml-[-0.75rem] mr-[-0.75rem] last:mb-[-0.75rem] md:flex mt-[35px]">
          <div className="block basis-0 grow shrink p-3">
            <Image
              src={CSSULogo}
              alt="CSSU Logo"
              className="object-contain"
              basePath={process.env.__NEXT_ROUTER_BASEPATH}
              width={400}
              height={400}
            />
          </div>

          <div className="block basis-0 grow shrink p-3">
            <div>
              <div className="font-medium text-base uppercase tracking-[1px] mb-5">
                <h3>Social Media</h3>
              </div>
              <ul className="leading-10 text-[1.1rem]">
                {FOOTER_SOCIAL_SECTION.map((link) => (
                  <IconHolder
                    key={link.href}
                    icon={getSocialIcon(link.icon)}
                    text={link.text}
                    href={link.href}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="block basis-0 grow shrink p-3">
            <div>
              <div className="font-medium text-base uppercase tracking-[1px] mb-5">
                <h3>Workspaces</h3>
              </div>
              <ul className="leading-10 text-[1.1rem]">
                {FOOTER_WORKSPACES_SECTION.map((link) => (
                  <IconHolder
                    key={link.href}
                    icon={getSocialIcon(link.icon)}
                    text={link.text}
                    href={link.href}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="block basis-0 grow shrink p-3">
            <div>
              <div className="font-medium text-base uppercase tracking-[1px] mb-5">
                <h3>Site issues?</h3>
              </div>
              <ul className="leading-10 text-[1.1rem]">
                <IconHolder
                  icon={getSocialIcon(FOOTER_SITE_ISSUES_LINK.icon)}
                  text={FOOTER_SITE_ISSUES_LINK.text}
                  href={FOOTER_SITE_ISSUES_LINK.href}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
