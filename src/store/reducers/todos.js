const INTIAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "Estudar React" },
  { id: 3, text: "Estudar Angular" }
];

export default function todos(state = INTIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
