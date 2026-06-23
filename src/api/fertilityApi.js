import api from './axios';

export const fertilityApi = {
  logCycle: async (periodStartDate, cycleLength = 28, symptoms = []) => {
    const response = await api.post('/api/fertility/cycle-log', {
      periodStartDate,
      cycleLength: Number(cycleLength),
      symptoms
    });
    return response.data;
  },

  getCalendar: async (month) => {
    // month format: YYYY-MM
    const response = await api.get('/api/fertility/calendar', {
      params: { month }
    });
    return response.data;
  },

  getOvulationToday: async () => {
    const response = await api.get('/api/fertility/ovulation-today');
    return response.data;
  }
};
