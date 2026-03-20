import Button from "../Button/Button";
import sytles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const ContactForm = () => {
  return (
    <section className={sytles.container}>
      <div className={sytles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
      </div>
      <div className={sytles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
