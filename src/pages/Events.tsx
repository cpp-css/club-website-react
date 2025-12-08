import "../styles/events.css";
import { useState } from "react";
import splatterBg from "../assets/Path75.png";
import { eventsData } from "../data/eventsData";
import type { EventItem } from "../data/eventsData";

export const Events = () => {
    const semesters = Array.from(new Set(eventsData.map((e) => e.semester))).sort();

    const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

    // Filter events for selected semester
    const semesterEvents = eventsData.filter(
        (e) => e.semester === selectedSemester
    );

    return (
        <div className="events-container">
            <section className="events-section">
                <img
                    src={splatterBg}
                    alt="decorative line"
                    className="events-decorative-bg"
                />

                <div className="events-filter">
                    <label>Previous Events:</label>
                    <select
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className="events-select"
                    >
                        {semesters.map((sem) => (
                            <option key={sem} value={sem}>
                            {sem}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="events-card-grid">
                    {semesterEvents.length === 0 && (
                        <p>No events available for this semester.</p>
                    )}

                    {semesterEvents.map((event: EventItem) => (
                        <div key={event.id} className="events-card">
                            {event.flyer && (
                            <img
                                src={event.flyer}
                                alt={event.title}
                                className="events-card-flyer"
                            />
                            )}

                        <h3 className="events-card-title">{event.title}</h3>
                        <p className="events-card-date">{event.date}</p>
                        <p className="events-card-desc">{event.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Events;