import React, { useRef, useState } from "react";
import { TextField, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = ({ handleClose }) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const defaultStyle = {
    height: "26vh",
  };
  const conditionalStyle = {
    height: "24vh",
  };

  const toastSucces = () => {
    toast.success("Message sent I will get in touch ASAP!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const toastError = (error) => {
    toast.error(`Error! Message not sent`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  //Email .js
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_dj1yvmk",
        "template_owt5ozq",
        form.current,
        "g2EdnGfq-1cJ8zW9l"
      )
      .then(
        (result) => {
          console.log(result);
          toastSucces();
        },
        (error) => {
          console.log(error);
          toastError(error);
        }
      );
  };
  const Schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email required"),
    subject: yup.string().required("Subject required"),
    message: yup.string().required("Message cannot be empty"),
  });

  const Values = {
    email: "",
    subject: "",
    message: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    sendEmail();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await resetForm({ values: "" });
    handleClose();
  };

  const formik = useFormik({
    initialValues: Values,
    validationSchema: Schema,
    onSubmit: onSubmit,
  });

  return (
    <>
      <Stack direction="column" alignItems="center">
        <Stack>
          <img
            src="/images/contact.png"
            alt="contact us"
            style={isFocused ? conditionalStyle : defaultStyle}
          />
        </Stack>
        <Stack>
          <Typography variant="h5" sx={{ color: "grey", fontWeight: 600 }}>
            Leave a message and I will get back to you shortly
          </Typography>
        </Stack>
      </Stack>

      <form onSubmit={formik.handleSubmit} ref={form}>
        <TextField
          sx={{ fontSize: "18px" }}
          fullWidth
          variant="standard"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TextField
          fullWidth
          variant="standard"
          id="subject"
          name="subject"
          label="Subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TextField
          fullWidth
          variant="standard"
          id="message"
          name="message"
          label="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={() => setIsFocused(false)}
          sx={{
            width: "100%",
            mt: 3,
            borderRadius: 2,
            bgColor: "#000",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Send message
        </Button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Contact;
