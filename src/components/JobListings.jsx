import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from './Spinner';


import { JobListing } from './JobListing';

const JobListings = ({ isHome = false }) => {
    // console.log(jobs);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // gets called the first time and after every dependency change
    useEffect(() => {
        // fetch api
        // let res = fetch('http://localhost:8000/jobs').then()
        const fetchJobs = async () => {
            try {
                /*
                const res = await fetch('http://localhost:8000/jobs');
                const data = await res.json();  // converting json like string to JSON
                setJobs(data);
                */
                /// same thing

                const apiUrl = isHome
                    ? 'api/jobs?_limit=3'
                    : 'api/jobs'
                fetch(apiUrl)
                    .then((res) => res.json())
                    .then((data) => setJobs(data));


            } catch (e) {
                console.log('Error fetching data', error);
            } finally {
                // setLoading(() => false);
                setLoading(false);
            }

        }

        fetchJobs();

    }, []);



    // const jobsListing = isHome ? jobs.slice(0, 3) : jobs;  // slice(fromIndex, toIndex)

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>

                {loading ? <Spinner /> : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />

                            ))}
                        </div>
                    </>
                )}

            </div>
        </section>

    )
}

export default JobListings