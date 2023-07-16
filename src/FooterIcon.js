const ContactIcon = ({ icon, href }) => (
  <div className="block hover:text-rosequartz-400 mt-1 mr-3">
    <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  </div>
  );

export default ContactIcon;