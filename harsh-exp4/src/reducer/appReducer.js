// ── Experiment 4: useReducer ──────────────────────────────────────────────
// Actions: ADD_SKILL, REMOVE_SKILL, TOGGLE_FAVORITE, CLEAR_FAVORITES, SET_FILTER, SET_SEARCH

export const initialState = {
  skills: [
    { id: 1, name: 'Python',           level: 90, category: 'Programming', favorite: false },
    { id: 2, name: 'Machine Learning', level: 82, category: 'AI/ML',       favorite: false },
    { id: 3, name: 'Data Science',     level: 78, category: 'AI/ML',       favorite: false },
    { id: 4, name: 'React',            level: 74, category: 'Web',         favorite: false },
    { id: 5, name: 'SQL',              level: 70, category: 'Data',        favorite: false },
    { id: 6, name: 'TensorFlow',       level: 68, category: 'AI/ML',       favorite: false },
  ],
  filter: 'All',
  searchQuery: '',
};

export function appReducer(state, action) {
  switch (action.type) {

    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, { ...action.payload, id: Date.now(), favorite: false }],
      };

    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter(s => s.id !== action.payload),
      };

    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        skills: state.skills.map(s =>
          s.id === action.payload ? { ...s, favorite: !s.favorite } : s
        ),
      };

    case 'CLEAR_FAVORITES':
      return {
        ...state,
        skills: state.skills.map(s => ({ ...s, favorite: false })),
      };

    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
}
