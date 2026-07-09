// Add user in database
// async function seedUsers() {
//   const users = [
//     {
//       name: "Blu Josen",
//       email: "blue.teacher@example.com",
//       password: await bcrypt.hash("BluPass123", 10),
//       role: "teacher",
//     },
//     {
//       name: "don Smith",
//       email: "don.student@example.com",
//       password: await bcrypt.hash("DonPass789", 10),
//       role: "student",
//     },
//   ];

//   await User.bulkCreate(users);
//   console.log("Users seeded successfully!");
// }

// seedUsers();

// add student or teacher in database
// async function seedStudentAndTeacher() {
//   const teachers = [
//     {
//       userId: "8997b32c-d8d2-4ca2-9c43-a039d29c84d7", // Alice Johnson from your User seed
//       employeeId: "EMP001",
//       qualification: "M.Sc. Mathematics",
//       subjects: "Mathematics, Physics",
//       classes: "10A, 11B",
//       joiningDate: new Date("2020-07-01"),
//       bio: "Passionate about teaching mathematics and science with 10 years of experience.",
//     },
//     {
//       userId: "cd11c7da-fdde-4c46-a558-9ab1decb80d7", // another teacher user you add
//       employeeId: "EMP002",
//       qualification: "B.Ed. English",
//       subjects: "English, History",
//       classes: "8A, 9C",
//       joiningDate: new Date("2021-06-15"),
//       bio: "Dedicated to improving students' language and communication skills.",
//     },
//   ];
//   // await Teacher.bulkCreate(teachers);

//   const students = [
//     {
//       userId: "0683f8b1-8f6e-44e7-a55b-f98fa42d3045", // Bob Smith from your User seed
//       rollNumber: "R001",
//       grade: "5th",
//       section: "A",
//       admissionDate: new Date("2022-04-10"),
//       guardianName: "John Smith",
//       guardianContact: "9876543210",
//       address: "123 Green Street, Ghaziabad",
//       status: "active",
//     },
//     {
//       userId: "4b9a149f-b475-4c69-9287-003d907d8a32", // another student user you add
//       rollNumber: "R002",
//       grade: "10th",
//       section: "B",
//       admissionDate: new Date("2021-03-20"),
//       guardianName: "Mary Doe",
//       guardianContact: "9123456789",
//       address: "456 Blue Avenue, Ghaziabad",
//       status: "active",
//     },
//   ];
//   await Teacher.bulkCreate(teachers);
//   await Student.bulkCreate(students);

//   console.log("Teacher and student data seeded successfully!");
// }

// seedStudentAndTeacher();

// Add available slots in database
// async function seedAvailableSlots() {
//   const slots = [
//     {
//       teacherId: "2014d9b7-6086-400f-8dc5-50bf19290927", // Teacher Alice Johnson
//       day: "Monday",
//       startTime: "09:00",
//       endTime: "09:30",
//       isBooked: true,
//     },
//     {
//       teacherId: "2014d9b7-6086-400f-8dc5-50bf19290927", // same teacher
//       day: "Monday",
//       startTime: "10:00",
//       endTime: "10:30",
//       isBooked: false,
//     },
//   ];

//   await AvailableSlot.bulkCreate(slots);
//   console.log("Available slots seeded successfully!");
// }

// seedAvailableSlots();

// add homework in database
// async function seedHomework() {
//   const homeworks = [
//     {
//       teacherId: "2014d9b7-6086-400f-8dc5-50bf19290927", // Alice Johnson teacherId
//       title: "Math Practice Worksheet",
//       description: "Complete exercises 1–10 from Chapter 3 (Fractions).",
//       subject: "Mathematics",
//       grade: "5th",
//       section: "A",
//       dueDate: new Date("2026-07-15"),
//       status: "assigned",
//     },
//     {
//       teacherId: "dad773fd-3abc-4bfa-b9ac-b019aa9f44b3", // Bob teacherId
//       title: "English Essay",
//       description: "Write a 300-word essay on 'My Favorite Season'.",
//       subject: "English",
//       grade: "8th",
//       section: "B",
//       dueDate: new Date("2026-07-20"),
//       status: "assigned",
//     },
//   ];

//   await Homework.bulkCreate(homeworks);
//   console.log("Homework assignments seeded successfully!");
// }

// add homework submission in database
// async function seedHomeworkSubmissions() {
//   const submissions = [
//     {
//       homeworkId: "6d9fcb3e-6a54-4902-b76c-e82483efb4a6", // Math homework UUID
//       studentId: "6c46f3c0-ea16-49ff-9149-bf13de880a67", // Bob Smith studentId
//       submissionDate: new Date("2026-07-14"),
//       fileUrl: "https://school-system.com/uploads/homework/bob_math.pdf",
//       grade: "A",
//     },
//     {
//       homeworkId: "6d9fcb3e-6a54-4902-b76c-e82483efb4a6", // Math homework UUID
//       studentId: "260aeb57-bd41-4a64-88f2-6dcdcd89c588", // Mary Doe studentId
//       submissionDate: new Date("2026-07-15"),
//       fileUrl: "https://school-system.com/uploads/homework/mary_math.pdf",
//       grade: "B+",
//     },
//   ];

//   await HomeworkSubmission.bulkCreate(submissions);
//   console.log("Homework submissions seeded successfully!");
// }

// await seedHomework();
// await seedHomeworkSubmissions();

// Add meetings in database
// async function seedMeetings() {
//   const meetings = [
//     {
//       organizerId: "8997b32c-d8d2-4ca2-9c43-a039d29c84d7", // Teacher Alice Johnson
//       title: "Parent-Teacher Meeting",
//       description: "Discuss Bob Smith's academic progress and behavior.",
//       date: new Date("2026-07-18"),
//       startTime: "10:00",
//       endTime: "10:30",
//       type: "parent-teacher",
//       status: "scheduled",
//     },
//     {
//       organizerId: "cd11c7da-fdde-4c46-a558-9ab1decb80d7", // Teacher Bob
//       title: "Student Guidance Session",
//       description: "Provide career counseling for Mary Doe.",
//       date: new Date("2026-07-19"),
//       startTime: "11:00",
//       endTime: "11:45",
//       type: "teacher-student",
//       status: "scheduled",
//     },
//   ];

//   await Meeting.bulkCreate(meetings);
//   console.log("Meetings seeded successfully!");
// }

// seedMeetings();

// *************** This is for seed all users


// Combined seeding: create users first, then teacher/student and homework
// async function seedAll() {
//   try {
//     // Create users (use findOrCreate to be idempotent)
//     const [teacherUser] = await User.findOrCreate({
//       where: { email: "blue.teacher@example.com" },
//       defaults: {
//         name: "Blu Josen",
//         email: "blue.teacher@example.com",
//         password: "BluPass123",
//         role: "teacher",
//       },
//     });

//     const [studentUser] = await User.findOrCreate({
//       where: { email: "don.student@example.com" },
//       defaults: {
//         name: "Don Smith",
//         email: "don.student@example.com",
//         password: "DonPass789",
//         role: "student",
//       },
//     });

//     // Create teacher linked to teacherUser
//     const [teacher] = await Teacher.findOrCreate({
//       where: { userId: teacherUser.id },
//       defaults: {
//         userId: teacherUser.id,
//         employeeId: "EMP001",
//         qualification: "M.Sc. Mathematics",
//         subjects: "Mathematics, Physics",
//         classes: "10A, 11B",
//         joiningDate: new Date("2020-07-01"),
//         bio: "Passionate about teaching mathematics and science.",
//       },
//     });

//     // Create student linked to studentUser
//     const [student] = await Student.findOrCreate({
//       where: { userId: studentUser.id },
//       defaults: {
//         userId: studentUser.id,
//         rollNumber: "R001",
//         grade: "5th",
//         section: "A",
//         admissionDate: new Date("2022-04-10"),
//         guardianName: "John Smith",
//         guardianContact: "9876543210",
//         address: "123 Green Street, Ghaziabad",
//         status: "active",
//       },
//     });

//     // Create an available slot for the teacher
//     await AvailableSlot.findOrCreate({
//       where: { teacherId: teacher.id, day: "Monday", startTime: "09:00" },
//       defaults: {
//         teacherId: teacher.id,
//         day: "Monday",
//         startTime: "09:00",
//         endTime: "09:30",
//         isBooked: false,
//       },
//     });

//     // Create homework linked to the teacher (use teacher.id)
//     await Homework.findOrCreate({
//       where: { title: "Math Practice Worksheet", teacherId: teacher.id },
//       defaults: {
//         teacherId: teacher.id,
//         title: "Math Practice Worksheet",
//         description: "Complete exercises 1–10 from Chapter 3 (Fractions).",
//         subject: "Mathematics",
//         grade: "5th",
//         section: "A",
//         dueDate: new Date("2026-07-15"),
//         status: "assigned",
//       },
//     });

//     console.log("Seeding complete.");
//   } catch (err) {
//     console.error("Seeding failed:", err);
//   }
// }

//  await seedAll();