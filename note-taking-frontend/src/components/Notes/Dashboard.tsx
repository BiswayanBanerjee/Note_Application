// import React, { useEffect, useState } from "react";
// import { Button, Box, Typography, Grid } from "@mui/material";
// import api from "../../services/api";
// import NoteItem from "./NoteItem";

// const NotesList: React.FC = () => {
//   interface Note {
//     _id: string;
//     // add other properties of Note here
//   }

//   const [notes, setNotes] = useState<Note[]>([]);

//   const fetchNotes = async () => {
//     try {
//       const response = await api.get("/notes");
//       setNotes(response.data);
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const handleDelete = (id: string) => {
//     setNotes(notes.filter(note => note._id !== id));
//   };

//   return (
//     <Box p={2}>
//       <Typography variant="h4" gutterBottom>Your Notes</Typography>
//       <Button variant="contained" color="primary" href="/create-note">Create Note</Button>
//       <Grid container spacing={2} mt={2}>
//         {notes.map((note: any) => (
//           <Grid item xs={12} sm={6} md={4} key={note._id}>
//             <NoteItem note={note} onDelete={handleDelete} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default NotesList;




// import React, { useEffect, useState } from "react";
// import { Button, Box, Typography, Grid, Card, CardContent, IconButton } from "@mui/material";
// import { Delete } from "@mui/icons-material";
// import api from "../../services/api";

// const Dashboard: React.FC = () => {
//   interface Note {
//     _id: string;
//     title: string;
//     content: string;
//   }

//   const [notes, setNotes] = useState<Note[]>([]);

//   const fetchNotes = async () => {
//     try {
//       const response = await api.get("/notes");
//       setNotes(response.data);
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await api.delete(`/notes/${id}`);
//       setNotes(notes.filter((note) => note._id !== id));
//     } catch (error) {
//       console.error("Error deleting note:", error);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const truncateContent = (content: string, maxLength: number = 15) =>
//     content.length > maxLength ? `${content.slice(0, maxLength)}..` : content;

//   return (
//     <Box
//       sx={{
//         p: 2,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       {/* Top Bar */}
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 2,
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           Dashboard
//         </Typography>
//         <Button variant="text" color="primary" href="/logout">
//           Sign Out
//         </Button>
//       </Box>

//       {/* Welcome Card */}
//       <Card
//         sx={{
//           width: "100%",
//           maxWidth: 500,
//           mb: 3,
//           p: 2,
//           textAlign: "center",
//           boxShadow: 2,
//           borderRadius: "10px",
//         }}
//       >
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold">
//             Welcome, Jonas Kahnwald!
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Email: xxxxxx@xxxx.com
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Create Note Button */}
//       <Button
//         variant="contained"
//         href="/create-note"
//         sx={{
//           width: "100%",
//           maxWidth: 300,
//           mb: 3,
//           py: 1.5,
//           fontWeight: "bold",
//           backgroundColor: "#367AFF",
//           borderRadius: "10px",
//         }}
//       >
//         <Typography
//           variant="button"
//           sx={{
//             color: "#FFF",
//             fontFamily: "Inter",
//             fontSize: "16px",
//             fontStyle: "normal",
//             fontWeight: 600,
//             lineHeight: "120%",
//             letterSpacing: "-0.16px",
//           }}
//         >
//           Create Note
//         </Typography>
//       </Button>

//       {/* Notes List */}
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: 500,
//           flexGrow: 1,
//           overflowY: "auto",
//         }}
//       >
//         <Typography variant="h6" gutterBottom>
//           Notes
//         </Typography>
//         <Grid container spacing={2}>
//           {notes.map((note, index) => (
//             <Grid item xs={12} key={note._id}>
//               <Card
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   boxShadow: 1,
//                   borderRadius: "8px",
//                   p: 1.5,
//                   backgroundColor: "#fff",
//                 }}
//               >
//                 <Box>
//                   <Typography variant="subtitle1" fontWeight="bold">
//                     Note {index + 1}: {note.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {truncateContent(note.content)}
//                   </Typography>
//                 </Box>
//                 <IconButton
//                   aria-label="delete"
//                   onClick={() => handleDelete(note._id)}
//                   sx={{
//                     border: "1px solid #ccc",
//                     borderRadius: "50%",
//                     backgroundColor: "#fff",
//                     color: "#000",
//                     "&:hover": {
//                       backgroundColor: "#f5f5f5",
//                     },
//                   }}
//                 >
//                   <Delete />
//                 </IconButton>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;








// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   IconButton,
//   TextField,
// } from "@mui/material";
// import { Delete, Edit, Save, Cancel, ExpandMore, ExpandLess } from "@mui/icons-material";
// import api from "../../services/api";

// const Dashboard: React.FC = () => {
//   interface Note {
//     _id: string;
//     title: string;
//     content: string;
//   }

//   const [notes, setNotes] = useState<Note[]>([]);
//   const [expandedNote, setExpandedNote] = useState<string | null>(null);
//   const [editingNote, setEditingNote] = useState<Note | null>(null);

//   const fetchNotes = async () => {
//     try {
//       const response = await api.get("/notes");
//       setNotes(response.data);
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await api.delete(`/notes/${id}`);
//       setNotes(notes.filter((note) => note._id !== id));
//     } catch (error) {
//       console.error("Error deleting note:", error);
//     }
//   };

//   const handleEditStart = (note: Note) => {
//     setEditingNote(note);
//   };

//   const handleEditCancel = () => {
//     setEditingNote(null);
//   };

//   const handleEditSave = async () => {
//     if (editingNote) {
//       try {
//         await api.put(`/notes/${editingNote._id}`, {
//           title: editingNote.title,
//           content: editingNote.content,
//         });
//         setNotes((prevNotes) =>
//           prevNotes.map((note) =>
//             note._id === editingNote._id ? editingNote : note
//           )
//         );
//         setEditingNote(null);
//       } catch (error) {
//         console.error("Error updating note:", error);
//       }
//     }
//   };

//   const toggleExpand = (id: string) => {
//     setExpandedNote((prev) => (prev === id ? null : id));
//     setEditingNote(null); // Exit editing mode when toggling expansion
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     if (editingNote) {
//       setEditingNote({ ...editingNote, [e.target.name]: e.target.value });
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Image */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage: "url(/assets/images/bg-img.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 0.9,
//           zIndex: -5,
//         }}
//       />

//       {/* Main Content */}
//       <Box
//         sx={{
//           p: 2,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           height: "100%",
//           backgroundColor: "rgba(255, 255, 255, 0.5)",
//         }}
//       >
//         {/* Top Bar */}
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             mb: 2,
//           }}
//         >
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             Dashboard
//           </Typography>
//           <Button variant="text" color="primary" href="/logout">
//             Sign Out
//           </Button>
//         </Box>

//         {/* Welcome Card */}
//         <Card
//           sx={{
//             width: "100%",
//             maxWidth: 500,
//             mb: 3,
//             p: 2,
//             textAlign: "center",
//             boxShadow: 2,
//             borderRadius: "10px",
//           }}
//         >
//           <CardContent>
//             <Typography variant="h6" fontWeight="bold">
//               Welcome, Jonas Kahnwald!
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Email: xxxxxx@xxxx.com
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* Create Note Button */}
//         <Button
//           variant="contained"
//           href="/create-note"
//           sx={{
//             width: "100%",
//             maxWidth: 300,
//             mb: 3,
//             py: 1.5,
//             fontWeight: "bold",
//             backgroundColor: "#367AFF",
//             borderRadius: "10px",
//           }}
//         >
//           Create Note
//         </Button>

//         {/* Notes List */}
//         <Box
//           sx={{
//             width: "100%",
//             maxWidth: 500,
//             flexGrow: 1,
//             overflowY: "auto",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Notes
//           </Typography>
//           <Grid container spacing={2}>
//             {notes.map((note, index) => (
//               <Grid item xs={12} key={note._id}>
//                 <Card
//                   sx={{
//                     boxShadow: 1,
//                     borderRadius: "8px",
//                     p: 1.5,
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   <Box
//                     onClick={() => toggleExpand(note._id)}
//                     sx={{
//                       cursor: "pointer",
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Box>
//                       <Typography variant="subtitle1" fontWeight="bold">
//                         Note {index + 1}: {note.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {expandedNote === note._id
//                           ? note.content
//                           : note.content.slice(0, 15) + "..."}
//                       </Typography>
//                     </Box>
//                     <Box>
//                       <IconButton>
//                         {expandedNote === note._id ? (
//                           <ExpandLess />
//                         ) : (
//                           <ExpandMore />
//                         )}
//                       </IconButton>
//                     </Box>
//                   </Box>

//                   {expandedNote === note._id && (
//                     <Box sx={{ mt: 1 }}>
//                       {editingNote && editingNote._id === note._id ? (
//                         <>
//                           <TextField
//                             name="title"
//                             label="Title"
//                             value={editingNote.title}
//                             sx={{ mb: 2 }} // Adds spacing below the Title field
//                             onChange={handleInputChange}
//                             fullWidth
//                           />
//                           <TextField
//                             name="content"
//                             label="Content"
//                             value={editingNote.content}
//                             onChange={handleInputChange}
//                             multiline
//                             rows={4}
//                             fullWidth
//                           />
//                           <Box
//                             sx={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                               mt: 1,
//                             }}
//                           >
//                             <Button
//                               startIcon={<Save />}
//                               onClick={handleEditSave}
//                               variant="contained"
//                               color="primary"
//                             >
//                               Save
//                             </Button>
//                             <Button
//                               startIcon={<Cancel />}
//                               onClick={handleEditCancel}
//                               variant="outlined"
//                               color="secondary"
//                             >
//                               Cancel
//                             </Button>
//                           </Box>
//                         </>
//                       ) : (
//                         <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                           <IconButton
//                             aria-label="edit"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleEditStart(note);
//                             }}
//                           >
//                             <Edit />
//                           </IconButton>
//                           <IconButton
//                             aria-label="delete"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleDelete(note._id);
//                             }}
//                           >
//                             <Delete />
//                           </IconButton>
//                         </Box>
//                       )}
//                     </Box>
//                   )}
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  TextField,
} from "@mui/material";
import {
  Delete,
  Edit,
  Save,
  Cancel,
  ExpandMore,
  ExpandLess,
  Add,
} from "@mui/icons-material";
import {jwtDecode} from "jwt-decode";
import api from "../../services/api";

const Dashboard: React.FC = () => {
  interface Note {
    _id: string;
    title: string;
    content: string;
  }

  interface User {
    name: string;
    email: string;
  }

  const [notes, setNotes] = useState<Note[]>([]);
  const [expandedNote, setExpandedNote] = useState<string | null>(null);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [newNote, setNewNote] = useState<Partial<Note>>({ title: "", content: "" });
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const fetchNotes = async () => {
    try {
      const response = await api.get("/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEditStart = (note: Note) => {
    setEditingNote(note);
  };

  const handleEditCancel = () => {
    setEditingNote(null);
  };

  const handleEditSave = async () => {
    if (editingNote) {
      try {
        await api.put(`/notes/${editingNote._id}`, {
          title: editingNote.title,
          content: editingNote.content,
        });
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note._id === editingNote._id ? editingNote : note
          )
        );
        setEditingNote(null);
      } catch (error) {
        console.error("Error updating note:", error);
      }
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedNote((prev) => (prev === id ? null : id));
    setEditingNote(null); // Exit editing mode when toggling expansion
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editingNote) {
      setEditingNote({ ...editingNote, [e.target.name]: e.target.value });
    } else {
      setNewNote({ ...newNote, [e.target.name]: e.target.value });
    }
  };

  const handleCreateNote = async () => {
    if (newNote.title && newNote.content) {
      try {
        const response = await api.post("/notes", newNote);
        const createdNote = response.data;
  
        // Ensure the new note has all necessary fields
        setNotes((prevNotes) => [
          { ...createdNote, content: newNote.content || "" },
          ...prevNotes,
        ]);
        setNewNote({ title: "", content: "" });
        setShowCreateForm(false);
      } catch (error) {
        console.error("Error creating note:", error);
      }
    }
  };
  

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        setUser({
          name: decodedToken.name,
          email: decodedToken.email,
        });
        fetchNotes();
      } catch (error) {
        console.error("Invalid token:", error);
      }
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/assets/images/bg-img.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          zIndex: -5,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        {/* Top Bar */}
<Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  }}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <img
      src="/assets/images/hd-icon.png"
      alt="HD Icon"
      style={{ width: 32, height: 32, marginRight: 8 }}
    />
    <Typography
      variant="h6"
      sx={{
        color: "#232323",
        textAlign: "center",
        fontFeatureSettings: "'liga' off, 'clig' off",
        fontFamily: "Inter",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "110%", // 22px
        letterSpacing: "-0.8px",
      }}
    >
      Dashboard
    </Typography>
  </Box>
  <Button
    variant="text"
    color="primary"
    onClick={handleSignOut}
    sx={{
      color: "#367AFF",
      fontFeatureSettings: "'liga' off, 'clig' off",
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "150%",
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationSkipInk: "none",
      textDecorationThickness: "auto",
      textUnderlineOffset: "auto",
      textUnderlinePosition: "from-font",
    }}
  >
    Sign Out
  </Button>
</Box>

        {/* Welcome Card */}
        <Card
          sx={{
            width: "90%",
            maxWidth: 500,
            mb: 3,
            p: 2,
            textAlign: "center",
            boxShadow: 2,
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Welcome, {user?.name || "User"}!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {user?.email || "N/A"}
            </Typography>
          </CardContent>
        </Card>

        {/* Create Note Section */}
        <Button
          startIcon={<Add />}
          variant="contained"
          sx={{
            width: "100%",
            maxWidth: 300,
            mb: 3,
            py: 1.5,
            fontWeight: "bold",
            backgroundColor: "#367AFF",
            borderRadius: "10px",
          }}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? "Cancel" : "Create Note"}
        </Button>
        {showCreateForm && (
          <Box sx={{ width: "100%", maxWidth: 500, mb: 3 }}>
            <TextField
              name="title"
              label="Title"
              value={newNote.title}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              name="content"
              label="Content"
              value={newNote.content}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateNote}
              fullWidth
            >
              Save Note
            </Button>
          </Box>
        )}

        {/* Notes List */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <Typography
  variant="h6"
  gutterBottom
  sx={{
    color: "#232323",
    // textAlign: "center",
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "110%", // 22px
    letterSpacing: "-0.8px",
  }}
>
  Notes
</Typography>
          <Grid container spacing={2}>
  {notes.map((note, index) => (
    <Grid item xs={12} key={note._id}>
      <Card
        sx={{
          boxShadow: 1,
          borderRadius: "8px",
          p: 1.5,
          backgroundColor: "#fff",
        }}
      >
        <Box
          onClick={() => toggleExpand(note._id)}
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Note {index + 1}: {note.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {expandedNote === note._id
                ? note.content || "No content available."
                : (note.content || "").slice(0, 15) + "..."}
            </Typography>
          </Box>
          <Box>
            <IconButton>
              {expandedNote === note._id ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>

        {expandedNote === note._id && (
          <Box sx={{ mt: 1 }}>
            {editingNote && editingNote._id === note._id ? (
              <>
                <TextField
                  name="title"
                  label="Title"
                  value={editingNote.title}
                  sx={{ mb: 2 }}
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  name="content"
                  label="Content"
                  value={editingNote.content}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  fullWidth
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Button
                    startIcon={<Save />}
                    onClick={handleEditSave}
                    variant="contained"
                    color="primary"
                  >
                    Save
                  </Button>
                  <Button
                    startIcon={<Cancel />}
                    onClick={handleEditCancel}
                    variant="outlined"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                </Box>
              </>
            ) : (
              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                <IconButton
                  aria-label="edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditStart(note);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(note._id);
                  }}
                >
                  <Delete />
                </IconButton>
              </Box>
            )}
          </Box>
        )}
      </Card>
    </Grid>
  ))}
</Grid>

        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
