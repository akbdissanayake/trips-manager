using System;
using System.Collections.Generic;
using System.Linq;

namespace Trips.Data
{
    public class TripService : ITripService
    {
        private readonly TripDbContext _dbContext;
        public TripService(TripDbContext dbContext) => _dbContext = dbContext;

        public void AddTrip(Trip trip)
        {
            if (trip != null)
            {
                _dbContext.Trips.Add(trip);
                _dbContext.SaveChanges();
            }
            else
            {
                trip = new Trip();
            }
        }

        public void DeleteTrip(int tripId)
        {
            var trip = _dbContext.Trips.FirstOrDefault(n => n.Id == tripId);
            if (trip != null)
            {
                _dbContext.Trips.Remove(trip);
                _dbContext.SaveChanges();
            }
        }

        public List<Trip> GetAllTrips() => _dbContext.Trips.ToList();


        public Trip GetTripById(int tripId) => _dbContext.Trips.FirstOrDefault(n => n.Id == tripId);

        public void UpdateTrip(int tripId, Trip trip)
        {
            var oldTrip = _dbContext.Trips.FirstOrDefault(n => n.Id == tripId);

            if (oldTrip != null)
            {
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
                _dbContext.SaveChanges();
            }
        }
    }
}