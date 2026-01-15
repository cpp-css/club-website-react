import "../styles/events.css";
import { useState } from "react";
import { eventsData, upcomingEvents } from "../data/eventsData";
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
                <div className="events-filter">
                    <h3 className="prev-events">Upcoming Events:</h3>
                </div>
                <div className="events-card-grid">
                    {upcomingEvents.length === 0 && (
                        <p>No upcoming events at this time.</p>
                    )}
                    {upcomingEvents.map((event: EventItem) => (
                        <div key={event.id} className="events-card">
                            {event.flyer && (
                                <img
                                    src={event.flyer}
                                    alt={event.title + " flyer"}
                                    className="events-card-flyer"
                                />
                            )}
                            <h3 className="events-card-title">{event.title}</h3>
                            <p className="events-card-desc">{event.description}</p>

                            <div className="events-date-splitter">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="events-date-icon"
                                fill="white"  // <-- This sets the SVG color
                                >
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                                </svg>
                                <p className="events-card-date">{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Previous Events Section */}
                <div className="events-filter">
                    <h3 className="prev-events">Previous Events:</h3>
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
                                    alt={event.title + " flyer"}
                                    className="events-card-flyer"
                                />
                            )}

                            <h3 className="events-card-title">{event.title}</h3>
                            <div className="events-date-splitter">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="events-date-icon"
                                fill="white"  // <-- This sets the SVG color
                                >
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                                </svg>
                                <p className="events-card-date">{event.date}</p>
                            </div>
                            <div className="events-tooltip">
                                <span className="events-tooltip-trigger">View Details <span className="arrow">→</span></span>
                                <div className="events-tooltip-content">
                                    {event.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Events;