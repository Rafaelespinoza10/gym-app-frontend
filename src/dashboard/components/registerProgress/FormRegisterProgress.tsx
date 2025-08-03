export const FormRegisterProgress = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Workout Details
      </h2>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Workout Name
          </label>
          <input
            type="text"
            placeholder="Morning Session"
            className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Workout Type
          </label>
          <select className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900">
            <option value="">Select type</option>
            <option value="strength">Strength</option>
            <option value="cardio">Cardio</option>
            <option value="mobility">Mobility</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Reps
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Weight (lbs)
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
          />
        </div>
      </div>
    </>
  );
};
