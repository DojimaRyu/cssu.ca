Last Edit January 14, 2026

##

Hello, everyone!<br>
If you are here to contribute, thank you for your continued interest in the CSSU - if you are just visiting, then welcome!

In any case, you have reached the CSSU Website GitHub; here, you'll find some quick details about the project, including what dependencies are required, how to run/deploy the project, and what changes are slated for release.<br>
If you would like to contribute, feel free to fork the project and submit a pull request; let us know and we'll review your changes.

Thanks again!
<p>
  <img src="public\people\chud.webp" alt="Reaper" width="100" /> <br>
  Edison Y. <br>
  Class of 2027, Computer Science Specialist<br>
  VP of Internal Relations<br>
</p>

## 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

**Troubleshooting** <br>
If you are using a Windows device, you may run into the following issue;
```bash
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system
... 
At line:1 char:1 + npm run dev + ~~~ + CategoryInfo : SecurityError: (:) [], PSSecurityException + FullyQualifiedErrorId : UnauthorizedAccess
```
* If you get this error or something like it, your issue arises from the current user's `ExecutionPolicy`; either this is undefined or we have not permitted such scripts to run. <br>
 * Common fixes may tell you to set modify this attribute; **do not do this, especially if you are going to set it to unrestriced!** This will open up your system to policy execution from any bad actors! <br><br>
 Check to make sure that you are working in the correct directory `...\cssu.ca` and that `npm` is installed. If this still occurs, you open up PowerShell in **Administrator Mode** and type `Set-ExecutionPolicy RemoteSigned`, which lets locally created scripts run.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
