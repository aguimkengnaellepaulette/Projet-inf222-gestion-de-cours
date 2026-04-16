const express = require('express');
const router = express.Router();


let courses = [
  { id: 1, name: "INF222", teacher: "Dr Jiomekong" },
  { id: 2, name: "MAT232", teacher: "Dr Kokomo" }
];

router.get('/', (req, res) => {
  res.json(courses);
});

router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id == req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Cours introuvable" });
  }

  res.json(course);
});

router.post('/', (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    teacher: req.body.teacher
  };

  courses.push(newCourse);

  res.status(201).json(newCourse);
});

router.delete('/:id', (req, res) => {
  const index = courses.findIndex(c => c.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Cours introuvable" });
  }

  const deletedCourse = courses.splice(index, 1);

  res.json({
    message: "Cours supprimé avec succès",
    course: deletedCourse[0]
  });
});

module.exports = router;