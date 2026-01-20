Last Edit January 19, 2026

##

Hello, everyone!<br>
If you are here to contribute, thank you for your continued interest in the CSSU - if you are just visiting, then welcome!

In any case, you have reached the CSSU Website GitHub; here, you'll find some quick details about the project, including what dependencies are required, how to run/deploy the project, and what changes are slated for release.<br>
If you would like to contribute, feel free to fork the project and submit a pull request; let us know and we'll review your changes. <br>

In terms of technical details; the default description describes it best;

- *This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).*

You can find the required packages in `package.json` and the full list of dependencies in `package-lock.json` - of note,
- `next-image-export-optimizer` is required to display non-linked image content
- `react-markdown, rehype-raw, remark-gfm` are required for importing the First-Year Guide from [Github](https://github.com/cssu/firstyearguide)
- `googleapis` is **not actually needed as of now**, but I am preparing the website to use the Google Sheets API to display our office schedule

Currently, our website is deployed **via Netlify at [cssu.ca](https://www.cssu.ca/)**.

Thanks again!
<p>
  <img src="public\people\exec\chud^2.webp" alt="Reaper" width="100" /> <br>
  Edison Y. <br>
  Class of 2027, Computer Science Specialist<br>
  VP Internal Relations<br>
</p>


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
Open [http://localhost:3000](http://localhost:3000) or whatever address your system has specified with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

**Troubleshooting** <br>
If you are using a Windows machine, you may run into the following issue;
```bash
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system
... 
At line:1 char:1 + npm run dev + ~~~ + CategoryInfo : SecurityError: (:) [], PSSecurityException + FullyQualifiedErrorId : UnauthorizedAccess
```
* If you get this error or something like it, your issue arises from the current user's `ExecutionPolicy`; either this is undefined or I have not permitted such scripts to run. <br>
 * Common fixes may tell you to set modify this attribute; **do not do this, especially if you are going to set it to unrestriced!** This will open up your system to policy execution from any bad actors! <br><br>
 Check to make sure that you are working in the correct directory `...\cssu.ca` and that `npm` is installed. If this still occurs, try opening up PowerShell in **Administrator Mode** and type `Set-ExecutionPolicy RemoteSigned`, which lets locally created scripts run.

## Project Structure
If you have previously worked on the website, you may have noticed that I have changed the entire frontend codebase. In particular;
- `src/config/` contains configuration files (navigation, social links, constants, and performance settings) 
> I like to put in our hardcoded values in here; say, urls and repeated information or magic numbers. Update as needed!
- `src/data/` contains information on upcoming events and Exec/Gen. Council members
- `src/components/` to find reusable **React webpages** 
- `src/app/` for **Next.js app router pages**
- `public/` for image files and the union Constitution

## Updating Content
Much of the content you'll have here can be left as-is; however, certain things like the [Exec/Gen. Council roster](https://www.cssu.ca/about) and the [Constitution](https://sop.utoronto.ca/wp-content/uploads/2025/08/computer-science-students-union-cssu-2025-08-09.pdf) will change as time goes on. 

You should be able to find;
- Important, *likely constant*, union information such as contact and socials in `src\config`
  1. `navigation.ts` for modifying nav links
  2. `social.ts` for social media links and footer links
  3. `constants.ts` for app-wide constants specifically relating to the CSSU
  4. `performance.ts` for in-testing image optimization
- Exec/Council profiles and event templates in `src\data`
  1. `profiles.ts` for Executive/Gen. Council profiles
  > Do note that profile do *NOT* need the `postion`, `github`, `linkedin`, or `imageUrl` fields to be filled in for deployment.
  2. `events.ts` for event/post profiles

- The office schedule in `src\app\about`, either as a written table (yuck!) or from the scraped Google Sheets API (a TODO for now)

I have designed these to be as easy to modify as possible with set parameters and fields; note that not all of them need to be filled in for deployment! For example, an Exec does not need to have a provided profile picture if they do not wish to have on.

## Performance Optimization
Currently, the website is pretty fast for a Next.js project. This is due to it having a grand total of... seven pages. Still, we can always do better.
- **Image Formatting** <br>
  In an ideal world, all image files would be in .webp format. However, this ideal world is obviously not ideal... the proof is left as an exercise to the reader. In any case, our preferred image format here is **in .webp** for reasons of space and load time.
  > I am interested in hosting these image files outside of GitHub and simply retrieving them remotely; this section is subject to change.

- **Image Loading** <br>
  To reduce the load of compiling the website, I have made it so that we do not load all of our image content at once, especially if the user cannot currently view it.
  1. Above-the-fold images use **priority loading**; I want these parts to be immediately visible.
  2. Below-the-fold images use **lazy loading**.

- **Code Organization** <br>
  As mentioned in the [project structure section](#project-structure), I have separated our data into configuration files in `data/config`. From a performance point of view, this means that we no longer have to retrieve values from collections and search for what we want as well as making easier for you to maintain this ~~travesty~~ website. 
  

## TODO
- Improve formatting of FYG to remain faithful to the GitHub version
- Fix office ops schedule (RESTful Google Sheets API?)
- Migrate image data outside of GitHub
- Fix last modified date bug (sometimes one day less)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
