// import React from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { Button, TextField, Box, Typography } from "@mui/material";
// import api from "../../services/api";

// const Signup: React.FC = () => {
//   const initialValues = { email: "", password: "" };

//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
//   });

//   const handleSubmit = async (values: typeof initialValues) => {
//     try {
//       await api.post("/auth/signup", values);
//       alert("Signup successful! Please login.");
//       window.location.href = "/login";
//     } catch (error) {
//       console.error("Signup failed:", error);
//     }
//   };

//   return (
//     <Box maxWidth={400} mx="auto" mt={5}>
//       <Typography variant="h4" gutterBottom>Signup</Typography>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//         {({ errors, touched }) => (
//           <Form>
//             <Field name="email" as={TextField} label="Email" fullWidth margin="normal" error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
//             <Field name="password" as={TextField} label="Password" type="password" fullWidth margin="normal" error={touched.password && !!errors.password} helperText={touched.password && errors.password} />
//             <Button type="submit" variant="contained" color="primary" fullWidth>Signup</Button>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default Signup;


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Visibility, VisibilityOff, CalendarToday } from "@mui/icons-material";

// const Signup: React.FC = () => {
//   const [showOtp, setShowOtp] = useState(false);

//   const handleOtpVisibility = () => setShowOtp(!showOtp);

//   return (
//     <Container maxWidth="lg" sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
//       <Grid container spacing={2} sx={{ boxShadow: 3, borderRadius: 3, overflow: "hidden" }}>
//         {/* Left Side - Signup Form */}
//         <Grid item xs={12} md={6} sx={{ padding: 4 }}>
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             Sign up
//           </Typography>
//           <Typography variant="body1" color="text.secondary" mb={4}>
//             Sign up to enjoy the feature of HD
//           </Typography>
//           <Box component="form" noValidate autoComplete="off">
//             <TextField
//               label="Your Name"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//             />
//             <TextField
//               label="Date of Birth"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <CalendarToday />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               label="Email"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               type="email"
//             />
//             <TextField
//               label="OTP"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               type={showOtp ? "text" : "password"}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleOtpVisibility}>
//                       {showOtp ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button
//               variant="contained"
//               fullWidth
//               sx={{ marginY: 2, paddingY: 1.5 }}
//             >
//               Sign up
//             </Button>
//           </Box>
//           <Typography align="center" variant="body2">
//             Already have an account?{" "}
//             <Typography
//               component="span"
//               color="primary"
//               sx={{ cursor: "pointer" }}
//             >
//               Sign in
//             </Typography>
//           </Typography>
//         </Grid>

//         {/* Right Side - Image */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             backgroundImage: "url('/assets/images/signup-bg.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         ></Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Grid,
//   IconButton,
//   InputAdornment,
//   CircularProgress,
// } from "@mui/material";
// import { Visibility, VisibilityOff, CalendarToday } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api"; // Importing API service

// const Signup: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     date_of_birth: "",
//     email: "",
//     otp: "",
//     password: "",
//   });
//   const [showOtpField, setShowOtpField] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Handle form field changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle OTP visibility toggle
//   const handleOtpVisibility = () => setShowPassword(!showPassword);

//   // Send signup request
//   const handleSignup = async () => {
//     try {
//       setLoading(true);
//       const { name, email, date_of_birth, password } = formData;

//       // API Call for signup
//       const response = await api.post("/auth/signup", {
//         name,
//         email,
//         date_of_birth,
//         password,
//       });

//       setOtpSent(true);
//       setLoading(false);
//       alert(response.data.message); // "OTP sent to email. Please verify to complete signup."
//     } catch (error: any) {
//       setLoading(false);
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   // Handle OTP verification
//   const handleVerifyOtp = async () => {
//     try {
//       setLoading(true);
//       const { email, otp } = formData;

//       // API Call for verifying OTP
//       const response = await api.post("/auth/verify-signup-otp", { email, otp });

//       setLoading(false);
//       alert(response.data.message); // "User registered successfully"
//       navigate("/login"); // Redirect to login page
//     } catch (error: any) {
//       setLoading(false);
//       alert(error.response?.data?.message || "Invalid OTP");
//     }
//   };

//   return (
//     <Grid
//       container
//       sx={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "url('/assets/images/signup-bg.png') no-repeat center center",
//         backgroundSize: "cover",
//       }}
//     >
//       <Grid
//         item
//         xs={11}
//         sm={8}
//         md={6}
//         lg={4}
//         sx={{
//           background: "rgba(255, 255, 255, 0.9)",
//           borderRadius: "12px",
//           boxShadow: 3,
//           padding: "32px",
//         }}
//       >
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           Sign up
//         </Typography>
//         <Typography variant="body1" color="text.secondary" mb={4}>
//           Sign up to enjoy the feature of HD
//         </Typography>

//         {/* Form Fields */}
//         <TextField
//           label="Your Name"
//           name="name"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <TextField
//           label="Date of Birth"
//           name="date_of_birth"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           value={formData.date_of_birth}
//           onChange={handleChange}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <CalendarToday />
//               </InputAdornment>
//             ),
//           }}
//         />
//         <TextField
//           label="Email"
//           name="email"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {otpSent ? (
//           <TextField
//             label="OTP"
//             name="otp"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={formData.otp}
//             onChange={handleChange}
//             type={showPassword ? "text" : "password"}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleOtpVisibility}>
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         ) : (
//           <TextField
//             label="Password"
//             name="password"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         )}

//         {/* Action Button */}
//         <Button
//           variant="contained"
//           fullWidth
//           sx={{ marginY: 2, paddingY: 1.5 }}
//           onClick={otpSent ? handleVerifyOtp : handleSignup}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={24} /> : otpSent ? "Verify OTP" : "Sign up"}
//         </Button>

//         {/* Navigate to Login */}
//         <Typography align="center" variant="body2">
//           Already have an account?{" "}
//           <Typography
//             component="span"
//             color="primary"
//             sx={{ cursor: "pointer" }}
//             onClick={() => navigate("/login")}
//           >
//             Sign in
//           </Typography>
//         </Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export default Signup;


// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Box,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Button,
// } from "@mui/material";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api"; // Importing the API service

// const Signup: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     date_of_birth: "",
//     email: "",
//     otp: "",
//     password: "",
//   });
//   const [showOtp, setShowOtp] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Toggle OTP visibility
//   const handleOtpVisibility = () => {
//     setShowOtp(!showOtp);
//   };

//   // Send signup request
//   const handleSignup = async () => {
//     try {
//       const { name, date_of_birth, email, password } = formData;

//       // API call to send signup data
//       const response = await api.post("/auth/signup", {
//         name,
//         date_of_birth,
//         email,
//         password,
//       });

//       alert(response.data.message); // "OTP sent to email. Please verify to complete signup."
//       setOtpSent(true);
//     } catch (error: any) {
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   // Verify OTP
//   const handleVerifyOtp = async () => {
//     try {
//       const { email, otp } = formData;

//       // API call to verify OTP
//       const response = await api.post("/auth/verify-signup-otp", { email, otp });

//       alert(response.data.message); // "User registered successfully"
//       navigate("/login"); // Navigate to login page
//     } catch (error: any) {
//       alert(error.response?.data?.message || "Invalid OTP");
//     }
//   };

// //   const handleVerifyOtp = async () => {
// //   try {
// //     const { email, otp } = formData;

// //     // API call to verify OTP
// //     const response = await api.post("/auth/verify-signup-otp", { email, otp });

// //     alert(response.data.message); // "User registered successfully"
// //     // Set login state and redirect
// //     setIsLoggedIn(true);
// //     navigate("/dashboard"); // Navigate to the dashboard or desired page
// //   } catch (error: any) {
// //     alert(error.response?.data?.message || "Invalid OTP");
// //   }
// // };

//   return (
//     <Container
//       maxWidth={false}
//       sx={{
//         height: "100vh",
//         // display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           height: "100%",
//           boxShadow: 3,
//           borderRadius: 3,
//           overflow: "hidden",
//         }}
//       >
//         {/* Left Side - Signup Form */}
//         <Grid item xs={12} md={5} sx={{ padding: 4 }}>
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
//             <img
//               src="/assets/images/hd-icon.png"
//               alt="HD Icon"
//               style={{ width: 32, height: 32, marginRight: 8 }}
//             />
//             <Typography
//               variant="h6"
//               fontWeight="bold"
//               sx={{
//                 color: "#232323",
//                 fontFeatureSettings: "'liga' off, 'clig' off",
//                 fontFamily: "Inter",
//                 fontSize: "24px",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 lineHeight: "110%",
//                 letterSpacing: "-0.96px",
//               }}
//             >
//               HD
//             </Typography>
//           </Box>
//           <Box component="form" noValidate autoComplete="off" sx={{ paddingLeft: 9, paddingRight: 9 }}>
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               Sign up
//             </Typography>
//             <Typography variant="body1" color="text.secondary" mb={4}>
//               Sign up to enjoy the feature of HD
//             </Typography>
//             <TextField
//               label="Your Name"
//               name="name"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Date of Birth"
//               name="date_of_birth"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               value={formData.date_of_birth}
//               onChange={handleChange}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               label="Email"
//               name="email"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {otpSent ? (
//               <TextField
//                 label="OTP"
//                 name="otp"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 type={showOtp ? "text" : "password"}
//                 value={formData.otp}
//                 onChange={handleChange}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={handleOtpVisibility}>
//                         {showOtp ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             ) : (
//               <TextField
//                 label="Password"
//                 name="password"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             )}
//             <Button
//               variant="contained"
//               fullWidth
//               sx={{ marginY: 2, paddingY: 1.5, backgroundColor: "#367AFF" , borderRadius: "10px"}}
//               onClick={otpSent ? handleVerifyOtp : handleSignup}
//             >
//               {otpSent ? "Verify OTP" : "Sign up"}
//             </Button>
//           </Box>
//           <Typography align="center" variant="body2">
//             Already have an account?{" "}
//             <Typography
//               component="span"
//               color="primary"
//               sx={{ cursor: "pointer" }}
//               onClick={() => navigate("/login")}
//             >
//               Sign in
//             </Typography>
//           </Typography>
//         </Grid>

//         {/* Right Side - Image */}
//         <Grid
//           item
//           xs={12}
//           md={7}
//           sx={{
//             backgroundImage: "url('/assets/images/signup-bg.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         ></Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Signup;












import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // Importing the API service

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
    email: "",
    otp: "",
    password: "",
  });
  const [showOtp, setShowOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile view

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle OTP visibility
  const handleOtpVisibility = () => {
    setShowOtp(!showOtp);
  };

  // Send signup request
  const handleSignup = async () => {
    try {
      const { name, date_of_birth, email, password } = formData;

      // API call to send signup data
      const response = await api.post("/auth/signup", {
        name,
        date_of_birth,
        email,
        password,
      });

      alert(response.data.message); // "OTP sent to email. Please verify to complete signup."
      setOtpSent(true);
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const { email, otp } = formData;

      // API call to verify OTP
      const response = await api.post("/auth/verify-signup-otp", { email, otp });

      alert(response.data.message); // "User registered successfully"
      navigate("/login"); // Navigate to login page
    } catch (error: any) {
      alert(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: isMobile ? "block" : "flex",
        padding: isMobile ? 2 : 0,
      }}
    >
      <Grid
        container
        spacing={isMobile ? 0 : 2}
        sx={{
          height: isMobile ? "auto" : "100%",
          boxShadow: isMobile ? "none" : 3,
          borderRadius: isMobile ? 0 : 3,
          overflow: "hidden",
        }}
      >
        {/* Left Side - Signup Form */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            padding: isMobile ? 2 : 4,
            background: isMobile ? "#fff" : "inherit",
            boxShadow: isMobile ? 3 : "none",
            borderRadius: isMobile ? 2 : 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <img
              src="/assets/images/hd-icon.png"
              alt="HD Icon"
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "#232323",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Inter",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "110%",
                letterSpacing: "-0.96px",
              }}
            >
              HD
            </Typography>
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: isMobile ? "20px" : "inherit" }}
            >
              Sign up
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              mb={4}
              sx={{ fontSize: isMobile ? "14px" : "inherit" }}
            >
              Sign up to enjoy the feature of HD
            </Typography>
            <TextField
              label="Your Name"
              name="name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Date of Birth"
              name="date_of_birth"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.date_of_birth}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {otpSent ? (
              <TextField
                label="OTP"
                name="otp"
                fullWidth
                margin="normal"
                variant="outlined"
                type={showOtp ? "text" : "password"}
                value={formData.otp}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleOtpVisibility}>
                        {showOtp ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            ) : (
              <TextField
                label="Password"
                name="password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            )}
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginY: 2,
                paddingY: 1.5,
                backgroundColor: "#367AFF",
                borderRadius: "10px",
              }}
              onClick={otpSent ? handleVerifyOtp : handleSignup}
            >
              {otpSent ? "Verify OTP" : "Sign up"}
            </Button>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{ fontSize: isMobile ? "14px" : "inherit" }}
          >
            Already have an account?{" "}
            <Typography
              component="span"
              color="primary"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Sign in
            </Typography>
          </Typography>
        </Grid>

        {/* Right Side - Image (Hidden for Mobile) */}
        {!isMobile && (
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              backgroundImage: "url('/assets/images/signup-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Signup;
