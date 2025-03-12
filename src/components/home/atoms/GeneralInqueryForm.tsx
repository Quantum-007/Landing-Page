"use client";

import { useState, FormEvent, useEffect } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import FormField from "./FormField";
import AlertSnackbar from "./AlertSnackBar";
import { useQuantumStore } from "@/providers/QuantumStoreProvider";

const GeneralInquiryForm = () => {
  const { message, clearMessage } = useQuantumStore(
    (state) => state,
  );


  const [formData, setFormData,] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    consent: false,
  });

  useEffect(() => {
    if (message) {
      setFormData((prev) => ({ ...prev, message }));
      clearMessage();
    }

  }, [clearMessage, formData, message]);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message.trim(),
      consent: !formData.consent,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      consent: false,
    });

    setErrors({
      name: false,
      email: false,
      message: false,
      consent: false,
    });
  };

  const HandleSubmitGeneralInquiry = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/createGeneralInquery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        resetFormData();
        setAlertMessage("Your inquiry has been submitted successfully!");
        setSeverity("success");
        setOpen(true);
      } else {
        setAlertMessage("There was an error submitting your inquiry.");
        setSeverity("error");
        setOpen(true);
      }
    } catch (error) {
      setAlertMessage("Something went wrong, please try again later.");
      setSeverity("error");
      setOpen(true);
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={HandleSubmitGeneralInquiry}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
            error={errors.name}
            helperText={errors.name ? "Full Name is required" : ""}
          />
        </Grid>

        <Grid item xs={12}>
          <FormField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
            type="email"
            error={errors.email}
            helperText={errors.email ? "Valid Email Address is required" : ""}
          />
        </Grid>

        <Grid item xs={12}>
          <FormField
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleFormChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FormField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            required
            multiline
            rows={4}
            error={errors.message}
            helperText={errors.message ? "Message is required" : ""}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="consent"
                checked={formData.consent}
                onChange={handleFormChange}
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-checked": { color: "#3c5a1e" },
                }}
              />
            }
            label={
              <Typography variant="body2" className="text-[#b0b0b0]">
                I consent to Quantum Robotics processing my data and contacting me about their products and services.*
              </Typography>
            }
          />
          {errors.consent && (
            <Typography color="error" variant="body2">
              You must provide consent to submit the form.
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            loading={loading}
            disabled={loading}
            sx={{
              backgroundColor: "#3c5a1e",
              color: "white",
              transform: "none",
            }}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Grid>
      </Grid>

      <AlertSnackbar
        open={open}
        message={alertMessage}
        severity={severity}
        handleClose={() => setOpen(false)}
      />
    </form>
  );
};

export default GeneralInquiryForm;
