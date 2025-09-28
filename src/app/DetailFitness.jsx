import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackActivity } from "@/redux/api/trackActivity";

import { ActivityType } from "@/components/ActivityType";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LocalTimeDate } from "@/components/LocalTimeDate";

export const DetailFitness = () => {
  const dispatch = useDispatch();

  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    activityType: "",
    duration: "",
    caloriesBurned: "",
    timestamp: null,
    additionalData: {
      distance: "",
      location: "",
      heartRate: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAdditionalChange = (e) => {
    setFormData({
      ...formData,
      additionalData: {
        ...formData.additionalData,
        [e.target.id]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId,
      activityType: formData.activityType,
      duration: Number(formData.duration),
      caloriesBurned: Number(formData.caloriesBurned),
      timestamp: formData.timestamp,
      additionalData: {
        distance: formData.additionalData.distance,
        location: formData.additionalData.location,
        heartRate: Number(formData.additionalData.heartRate),
      },
    };
    // console.log(payload);
    dispatch(trackActivity(payload));
  };

  // useEffect(() => {
  //   dispatch(fetchActivities());
  // }, [dispatch]);

  return (
    <Card>
      <form onSubmit={handleSubmit} className="m-5">
        <div className="grid gap-6">
          {/* ActivityType */}
          <div className="grid gap-3">
            <Label htmlFor="activityType">Activity Type</Label>
            <ActivityType
              value={formData.activityType}
              onChange={(value) =>
                setFormData({ ...formData, activityType: value })
              }
            />
          </div>

          {/* Duration */}
          <div className="grid gap-3">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              placeholder="Enter duration"
              required
              value={formData.duration}
              onChange={handleChange}
            />
          </div>

          {/* Calories */}
          <div className="grid gap-3">
            <Label htmlFor="caloriesBurned">Calories Burned</Label>
            <Input
              id="caloriesBurned"
              type="number"
              placeholder="Enter calories burned"
              required
              value={formData.caloriesBurned}
              onChange={handleChange}
            />
          </div>

          {/* Timestamp */}
          <div className="grid gap-3">
            <Label htmlFor="timestamp">Timestamp</Label>
            <LocalTimeDate
              value={formData.timestamp}
              onChange={(date) => setFormData({ ...formData, timestamp: date })}
            />
          </div>

          {/* Additional Data */}
          <div className="grid gap-3">
            <Label htmlFor="distance">Distance</Label>
            <Input
              id="distance"
              type="text"
              placeholder="Enter distance (e.g., 5km)"
              value={formData.additionalData.distance}
              onChange={handleAdditionalChange}
            />

            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="Enter location"
              value={formData.additionalData.location}
              onChange={handleAdditionalChange}
            />

            <Label htmlFor="heartRate">Heart Rate</Label>
            <Input
              id="heartRate"
              type="number"
              placeholder="Enter heart rate"
              value={formData.additionalData.heartRate}
              onChange={handleAdditionalChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};
