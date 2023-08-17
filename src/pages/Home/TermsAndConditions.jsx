const terms = [
  {
    title: "1. Changes to the Terms of Service",
    content:
      "RenderVerse reserves the right to change or modify these Terms at any time and in our sole discretion. If we make changes to these Terms, we will provide notice of such changes, such as by sending an email notification, providing notice through the Service, or updating the “Last Updated” date at the beginning of these Terms. By continuing to access or use the Service, you confirm your acceptance of the revised Terms and all the terms incorporated therein by reference. We encourage you to review the Terms frequently to ensure that you understand the terms and conditions that apply when you access or use the Service. If you do not agree to the revised Terms, you may not access or use the Service. ",
  },
  {
    title: "2.	Connecting a digital wallet",
    content:
      "Action on the RenderVerse website such as: initiating an transaction or offering  to purchase a Crypto Asset, can be performed strictly by linking your digital wallets on supported bridge extensions. We advise you to read the details on their website before you elect to use them.  Before initiating an Auction or offering to purchase an asset through Renderverse you will need to connect a supported electronic wallet extension and unlock your digital wallets with that extension.",
    sub: "ALL TRANSACTIONS INITIATED THROUGH OUR SERVICE ARE FACILITATED AND RUN BY THESE THIRD-PARTY ELECTRONIC WALLET EXTENSIONS, AND BY USING OUR SERVICES YOU AGREE THAT YOU ARE GOVERNED BY THE TERMS OF SERVICE AND PRIVACY POLICY FOR THE APPLICABLE EXTENSIONS.",
  },
  {
    title: "3. All purchases of RNDV are final",
    content:
      "ALL PURCHASES OF RNDV ARE FINAL.THE PURCHASER ACKNOWLEDGES THAT NEITHER THE COMPANY NOR ANY OF ITS AFFILIATES, DIRECTORS OR SHAREHOLDERS ARE REQUIRED TO PROVIDE A REFUND FOR ANY REASON.",
  },
  {
    title: "4. Purchaser Representations",
    content:
      "4.1 The Purchaser has full legal capacity, power and authority to execute and deliver this Agreement and to perform its obligations hereunder. This Agreement constitutes a valid and binding obligation of the Investor, enforceable in accordance with its terms, except as limited by bankruptcy, insolvency or other laws of general application relating to or affecting the enforcement of creditors’ rights generally.",
    sub: " 4.2 The Purchaser has such knowledge and experience in financial and business matters that the Investor can evaluate the merits and risks of such investment, is able to incur a complete loss of such investment without impairing the Purchaser’s financial condition, and is able to bear the economic risk of such investment for an indefinite period of time. ",
  },
  {
    title: "5. Cryptocurrencies",
    content:
      "The Company makes no representations as to this Agreement amounting to an Investment. The purchase of Tokens is not an Investment opportunity and should not be treated as such. ",
  },
  {
    title: "6. Availability of Website/Services",
    content:
      "Subject to the terms and conditions of this Agreement and our other policies and procedures, we shall use commercially reasonable efforts to attempt to provide this Site and the Services on a twenty-four (24) hours a day, seven (7) days a week basis. You acknowledge and agree that from time to time this Site may be inaccessible or inoperable for any reason including, but not limited to, equipment malfunctions; periodic maintenance, repairs or replacements that we undertake from time to time.",
  },
  {
    title: "7. Risk of Mining Attacks",
    content:
      "As with other decentralised cryptographic tokens, RNDV are susceptible to attacks by miners in the course of validating RNDV transactions , including, but not limited, to double-spend attacks, majority mining power attacks, and selfish-mining attacks.",
  },
  {
    title: "8. Risk of Hacking and Security Weaknesses",
    content:
      "Hackers or other malicious groups or organisations may attempt to interfere with the platform or RNDV in a variety of ways, including, but not limited to, malware attacks, denial of service attacks, consensus-based attacks, Sybil attacks, smurfing, and spoofing.",
    sub: "THE PURCHASER EXPRESSLY AGREES THAT THE PURCHASER IS PURCHASING RNDV AT THE PURCHASER’S SOLE RISK AND THAT RNDV IS PROVIDED ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE OR IMPLIED WARRANTIES, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WITHOUT LIMITING THE FOREGOING, NONE OF THE RENDERVERSE TEAM WARRANTS THAT THE PROCESS FOR PURCHASING HERO WILL BE UNINTERRUPTED OR ERROR-FREE.",
  },
];

const Terms = () => {
  return (
    <div>
      <h2>Terms of Service</h2>
      <p>
        please read on to learn the rules and restrictions that govern your use
        of our products, services and applications, including, but not limited
        to, our web interface located at https://renderverse.io/ (“site”) and
        our corresponding mobile application(s) (collectively, the “services”).
        these terms of service (the “terms”) are a binding contract between you
        and renderverse . as used in these terms, “we”, “us”, or “our” also
        refers to renderverse. you must agree to and accept all of the terms, or
        you don’t have the right to use the services. your use of the services
        in any way means that you agree to all of these terms, and these terms
        will remain in effect while you use the services. these terms include
        the provisions in this document, as well as those ain our privacy
        policy, and any other terms and conditions that we may reference or
        incorporate into these terms from time to time.
      </p>
      <p>
        do not purchase rndv token if you are not an expert in dealing with
        cryptographic tokens and blockchain-based software systems. prior to
        purchasing rndv, you should carefully consider the terms listed below
        and, to the extent necessary, consult an appropriate lawyer, accountant,
        or tax professional. if any of the following terms are unacceptable to
        you, you should not purchase rndv.
      </p>
      <p>
        purchaser agrees to buy, and company agrees to sell, the rndv tokens in
        accordance with the following terms
      </p>
      <div>
        {terms.map((term) => {
          return (
            <div key={term.title}>
              <h4>{term.title}</h4>
              <p>{term.content}</p>
              <p> {term.sub} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terms;
