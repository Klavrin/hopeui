import Link from 'next/link'

const Footer = () => {
  const alertButton = () => {
    alert(
      'This project is solely intended for showcase purposes. The Figma template utilized in this project is provided by IQONIC Design, and I possess all necessary rights and permissions for its use. I want to assure you that I fully respect and acknowledge the rights and permissions granted to me for the use of this template. It has been an invaluable asset in bringing this project to life and showcasing my abilities to potential clients as a beginner in the freelance industry. If you encounter any inquiries, feedback, or concerns related to this project, I wholeheartedly encourage you to reach out to me directly. I am readily available to assist and address any questions you may have. Please feel free to contact me at my email address: sergeras4@gmail.com.'
    )
  }

  return (
    <footer className="w-full flex md:flex-row flex-col md:justify-between md:gap-0 gap-2 items-center py-4 px-6 bg-[#FEFEFF] dark:bg-darkThemeBackground">
      <div className="flex gap-6">
        <Link
          href="#"
          className="text-black dark:text-textColor2 text-xs font-normal leading-normal"
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-black dark:text-textColor2 text-xs font-normal leading-normal"
        >
          Terms of Use
        </Link>
        <button
          onClick={alertButton}
          className="text-black dark:text-textColor2 text-xs font-normal leading-normal"
        >
          About the web app
        </button>
      </div>

      <h4 className="text-black dark:text-textColor2 text-xs font-normal leading-normal">
        © 2021 Hope UI, Made with ❤ by{' '}
        <a
          href="https://iqonic.design/"
          target="_blank"
          className="text-primary"
        >
          IQONIC Design.
        </a>
      </h4>
    </footer>
  )
}

export default Footer
