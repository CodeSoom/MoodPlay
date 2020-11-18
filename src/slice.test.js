import reducer, {
  setClientLocation,
  setMoodRatio,
  setTodayMood,
} from './slice';

describe('reducer', () => {
  describe('setClientLocationt', () => {
    it('changes clientLocation', () => {
      const initialState = {
        clientLocation: null,
      };

      const clientLocation = {
        x: '15',
        y: '22',
      };

      const state = reducer(initialState, setClientLocation(clientLocation));

      expect(state.clientLocation).toEqual(clientLocation);
    });
  });

  describe('setMoodRatio', () => {
    const initialState = {
      moodRatio: {},
    };

    context('pointer is close to "calm" and "sad" than "uplifting" and "happy"', () => {
      it('changes uplifting and happy in moodRatio', () => {
        const moodRatio = {
          top: 100,
          left: 200,
          width: 300,
          xPosition: 240,
          yPosition: 280,
        };

        const state = reducer(initialState, setMoodRatio(moodRatio));

        expect(state.moodRatio.calm).toBe(73);
        expect(state.moodRatio.sad).toBe(20);
      });
    });

    context('pointer is close to "uplifting" and "happy" than "calm" and "sad"', () => {
      it('changes calm and sad in moodRatio', () => {
        const moodRatio = {
          top: 100,
          left: 200,
          width: 300,
          xPosition: 380,
          yPosition: 200,
        };

        const state = reducer(initialState, setMoodRatio(moodRatio));

        expect(state.moodRatio.uplifting).toBe(20);
        expect(state.moodRatio.happy).toBe(33);
      });
    });
  });

  describe('setTodayMood', () => {
    it('changes todayMood', () => {
      const initialState = {
        todayMood: [],
        moodRatio: {
          calm: 40,
          uplifting: 0,
          happy: 20,
          sad: 0,
        },
      };

      const state = reducer(initialState, setTodayMood());

      expect(state.todayMood).toEqual([
        ['차분한', 40],
        ['밝은', 20],
      ]);
    });
  });
});
