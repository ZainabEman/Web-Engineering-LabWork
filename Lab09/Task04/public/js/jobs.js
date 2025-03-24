// jobs.js

let applyModal = new bootstrap.Modal(document.getElementById('applyModal'));

function loadJobs() {
  fetch('/api/jobs')
    .then(res => res.json())
    .then(jobs => {
      const jobList = document.getElementById('jobList');
      const adminSelect = document.getElementById('adminJobSelect');
      jobList.innerHTML = '';
      adminSelect.innerHTML = '<option value="">Select Job</option>';

      jobs.forEach(job => {
        jobList.innerHTML += `
          <div class="col-md-4">
            <div class="card h-100 shadow">
              <div class="card-body">
                <h5 class="card-title">${job.title}</h5>
                <p class="card-text">${job.description}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <button class="btn btn-primary" onclick="openApplyModal(${job.id})">Apply Now</button>
              </div>
            </div>
          </div>
        `;
        adminSelect.innerHTML += `<option value="${job.id}">${job.title}</option>`;
      });
    });
}

function openApplyModal(jobId) {
  document.getElementById('jobId').value = jobId;
  applyModal.show();
}

document.getElementById('applicationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = {
    job_id: document.getElementById('jobId').value,
    name: document.getElementById('applicantName').value,
    email: document.getElementById('applicantEmail').value,
    resume_link: document.getElementById('resumeLink').value
  };

  fetch('/api/applicants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(response => {
      alert(response.message);
      applyModal.hide();
      document.getElementById('applicationForm').reset();
    });
});

document.getElementById('adminJobSelect').addEventListener('change', function () {
  const jobId = this.value;
  if (!jobId) return;
  fetch(`/api/applicants/${jobId}`)
    .then(res => res.json())
    .then(applicants => {
      const list = document.getElementById('applicantList');
      list.innerHTML = '';
      applicants.forEach(app => {
        list.innerHTML += `
          <li class="list-group-item">
            <strong>${app.name}</strong> (${app.email})<br>
            Resume: <a href="${app.resume_link}" target="_blank">${app.resume_link}</a><br>
            <small class="text-muted">${new Date(app.applied_at).toLocaleString()}</small>
          </li>
        `;
      });
    });
});

loadJobs();
