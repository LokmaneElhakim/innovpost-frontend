"use client";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { buttonVariants } from "@/components/ui/button";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] px-4">
        <div className="mb-12 rounded-md bg-white dark:bg-inherit px-6 py-8 shadow-three sm:p-10">
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Nous apprécions vos retours ! N&apos;hésitez pas à nous les
            partager.
          </h2>
          <p className="mb-8 text-base font-medium text-body-color">
            Notre équipe de support s&apos;engage à vous répondre dans les plus
            brefs délais par e-mail.
          </p>
          <form>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Enterer votre name"
                    className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Votre Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enterer votre email"
                    className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Enterer votre message"
                    className="border-stroke w-full resize-none rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
              </div>
              <div className="w-full px-4">
                <button
                  className={buttonVariants()}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Send feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
