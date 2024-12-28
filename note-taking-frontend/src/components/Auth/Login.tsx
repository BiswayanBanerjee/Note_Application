// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Box,
//   TextField,
//   Button,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import api from "../../services/api";

// const Login: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginWithOtp, setLoginWithOtp] = useState(false);

//   const initialValues = loginWithOtp
//     ? { email: "", otp: "" }
//     : { email: "", password: "" };

//   const validationSchema = Yup.object(
//     loginWithOtp
//       ? {
//           email: Yup.string().email("Invalid email").required("Required"),
//           otp: Yup.string().required("OTP is required"),
//         }
//       : {
//           email: Yup.string().email("Invalid email").required("Required"),
//           password: Yup.string().required("Password is required"),
//         }
//   );

//   const handleSubmit = async (values: typeof initialValues) => {
//     try {
//       if (loginWithOtp) {
//         const response = await api.post("/auth/verify-otp", {
//           email: values.email,
//           otp: values.otp,
//         });
//         alert(response.data.message);
//       } else {
//         const response = await api.post("/auth/login", {
//           email: values.email,
//           password: values.password,
//         });
//         localStorage.setItem("token", response.data.token);
//         window.location.href = "/notes";
//       }
//     } catch (error: any) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <Container
//       maxWidth={false}
//       sx={{
//         height: "100vh",
//         display: "flex",
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
//         {/* Left Side - Image */}
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

//         {/* Right Side - Login Form */}
//         <Grid item xs={12} md={6} sx={{ padding: 4 }}>
//           <Box sx={{ padding: 8 }}>
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               Login
//             </Typography>
//             <Typography variant="body1" color="text.secondary" mb={4}>
//               Login to continue to HD
//             </Typography>

//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ errors, touched }) => (
//                 <Form>
//                   <Field
//                     name="email"
//                     as={TextField}
//                     label="Email"
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     error={touched.email && !!errors.email}
//                     helperText={touched.email && errors.email}
//                   />

//                   {loginWithOtp ? (
//                     <Field
//                       name="otp"
//                       as={TextField}
//                       label="OTP"
//                       fullWidth
//                       margin="normal"
//                       variant="outlined"
//                       error={touched.otp && !!errors.otp}
//                       helperText={touched.otp && errors.otp}
//                     />
//                   ) : (
//                     <Field
//                       name="password"
//                       as={TextField}
//                       label="Password"
//                       type={showPassword ? "text" : "password"}
//                       fullWidth
//                       margin="normal"
//                       variant="outlined"
//                       error={touched.password && !!errors.password}
//                       helperText={touched.password && errors.password}
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton
//                               onClick={() => setShowPassword(!showPassword)}
//                             >
//                               {showPassword ? <VisibilityOff /> : <Visibility />}
//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   )}

//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     sx={{ marginY: 2, paddingY: 1.5, backgroundColor: "#367AFF" }}
//                   >
//                     {loginWithOtp ? "Login with OTP" : "Login"}
//                   </Button>

//                   <Typography
//                     variant="body2"
//                     align="center"
//                     sx={{ cursor: "pointer", color: "#367AFF" }}
//                     onClick={() => setLoginWithOtp(!loginWithOtp)}
//                   >
//                     {loginWithOtp
//                       ? "Login with Password instead"
//                       : "Login with OTP instead"}
//                   </Typography>
//                 </Form>
//               )}
//             </Formik>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Login;



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
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import api from "../../services/api";

// const Login: React.FC = () => {
//   const [useOtp, setUseOtp] = useState(false); // Toggle between OTP and password login
//   const [otpSent, setOtpSent] = useState(false); // Track OTP sent status
//   const [showPassword, setShowPassword] = useState(false);

//   const handleToggleLoginMethod = () => {
//     setUseOtp(!useOtp);
//     setOtpSent(false); // Reset OTP sent status when switching methods
//   };

//   const handleSendOtp = async (email: string) => {
//     try {
//       await api.post("/auth/send-otp", { email });
//       alert("OTP sent successfully to your email");
//       setOtpSent(true);
//     } catch (error: any) {
//       alert(error.response?.data?.message || "Failed to send OTP");
//     }
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     ...(useOtp
//       ? { otp: Yup.string().required("OTP is required") }
//       : { password: Yup.string().required("Password is required") }),
//   });

//   const formik = useFormik({
//     initialValues: { email: "", password: "", otp: "" },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         if (useOtp) {
//           // Login with OTP
//           const response = await api.post("/auth/verify-otp", {
//             email: values.email,
//             otp: values.otp,
//           });
//           localStorage.setItem("token", response.data.token); // Save the token
//         } else {
//           // Login with password
//           const response = await api.post("/auth/login", {
//             email: values.email,
//             password: values.password,
//           });
//           localStorage.setItem("token", response.data.token); // Save the token
//         }
//         window.location.href = "/notes"; // Redirect to notes page
//       } catch (error: any) {
//         alert(error.response?.data?.message || "Login failed");
//       }
//     },
    
//   });
  

//   return (
//     <Container
//       maxWidth={false}
//       sx={{
//         height: "100vh",
//         display: "flex",
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
//         {/* Left Side - Image */}
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

//         {/* Right Side - Login Form */}
//         <Grid item xs={12} md={5} sx={{ padding: 4 }}>
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
//                       <img
//                         src="/assets/images/hd-icon.png"
//                         alt="HD Icon"
//                         style={{ width: 32, height: 32, marginRight: 8 }}
//                       />
//                       <Typography
//                         variant="h6"
//                         fontWeight="bold"
//                         sx={{
//                           color: "#232323",
//                           fontFeatureSettings: "'liga' off, 'clig' off",
//                           fontFamily: "Inter",
//                           fontSize: "24px",
//                           fontStyle: "normal",
//                           fontWeight: 600,
//                           lineHeight: "110%",
//                           letterSpacing: "-0.96px",
//                         }}
//                       >
//                         HD
//                       </Typography>
//                     </Box>
//           <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ paddingLeft: 9, paddingRight: 9 }}>
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             Login
//           </Typography>
//           <Typography variant="body1" color="text.secondary" mb={4}>
//             Login to access your account
//           </Typography>
//             <TextField
//               label="Email"
//               name="email"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               error={formik.touched.email && !!formik.errors.email}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//             {useOtp ? (
//               otpSent ? (
//                 <TextField
//                   label="OTP"
//                   name="otp"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   value={formik.values.otp}
//                   onChange={formik.handleChange}
//                   error={formik.touched.otp && !!formik.errors.otp}
//                   helperText={formik.touched.otp && formik.errors.otp}
//                 />
//               ) : (
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   sx={{ marginY: 2, paddingY: 1.5 }}
//                   onClick={() => handleSendOtp(formik.values.email)}
//                   disabled={!formik.values.email || !!formik.errors.email}
//                 >
//                   Send OTP
//                 </Button>
//               )
//             ) : (
//               <TextField
//                 label="Password"
//                 name="password"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 type={showPassword ? "text" : "password"}
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 error={formik.touched.password && !!formik.errors.password}
//                 helperText={formik.touched.password && formik.errors.password}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={() => setShowPassword(!showPassword)}>
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             )}
//             {otpSent || !useOtp ? (
//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 sx={{ marginY: 2, paddingY: 1.5, backgroundColor: "#367AFF" , borderRadius: "10px"}}
//               >
//                 {useOtp ? "Verify OTP" : "Login"}
//               </Button>
//             ) : null}
//           </Box>
//           <Typography
//             align="center"
//             variant="body2"
//             sx={{ cursor: "pointer" }}
//             onClick={handleToggleLoginMethod}
//           >
//             {useOtp ? "Login with Password" : "Login with OTP"}
//           </Typography>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Login;























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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../services/api";

const Login: React.FC = () => {
  const [useOtp, setUseOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleToggleLoginMethod = () => {
    setUseOtp(!useOtp);
    setOtpSent(false);
  };

  const handleSendOtp = async (email: string) => {
    try {
      await api.post("/auth/send-otp", { email });
      alert("OTP sent successfully to your email");
      setOtpSent(true);
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to send OTP");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    ...(useOtp
      ? { otp: Yup.string().required("OTP is required") }
      : { password: Yup.string().required("Password is required") }),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", otp: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (useOtp) {
          const response = await api.post("/auth/verify-otp", {
            email: values.email,
            otp: values.otp,
          });
          localStorage.setItem("token", response.data.token);
        } else {
          const response = await api.post("/auth/login", {
            email: values.email,
            password: values.password,
          });
          localStorage.setItem("token", response.data.token);
        }
        window.location.href = "/notes";
      } catch (error: any) {
        alert(error.response?.data?.message || "Login failed");
      }
    },
  });

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          boxShadow: 3,
          borderRadius: 3,
          overflow: "hidden",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
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

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            padding: isMobile ? 2 : 4,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 3,
            }}
          >
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
                fontSize: isMobile ? "20px" : "24px",
                fontWeight: 600,
                lineHeight: "110%",
                letterSpacing: "-0.96px",
              }}
            >
              HD
            </Typography>
          </Box>

          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{
              paddingLeft: isMobile ? 0 : 9,
              paddingRight: isMobile ? 0 : 9,
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              fontWeight="bold"
              gutterBottom
            >
              Login
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: isMobile ? "center" : "left", marginBottom: 4 }}
            >
              Login to access your account
            </Typography>
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            {useOtp ? (
              otpSent ? (
                <TextField
                  label="OTP"
                  name="otp"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formik.values.otp}
                  onChange={formik.handleChange}
                  error={formik.touched.otp && !!formik.errors.otp}
                  helperText={formik.touched.otp && formik.errors.otp}
                />
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ marginY: 2, paddingY: 1.5 }}
                  onClick={() => handleSendOtp(formik.values.email)}
                  disabled={!formik.values.email || !!formik.errors.email}
                >
                  Send OTP
                </Button>
              )
            ) : (
              <TextField
                label="Password"
                name="password"
                fullWidth
                margin="normal"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            {otpSent || !useOtp ? (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  marginY: 2,
                  paddingY: 1.5,
                  backgroundColor: "#367AFF",
                  borderRadius: "10px",
                }}
              >
                {useOtp ? "Verify OTP" : "Login"}
              </Button>
            ) : null}
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{ cursor: "pointer" }}
            onClick={handleToggleLoginMethod}
          >
            {useOtp ? "Login with Password" : "Login with OTP"}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
