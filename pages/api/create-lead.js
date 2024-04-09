
// pages/api/create-lead.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const apiKey = process.env.Job_NIMBUS_API_KEY
      const {
        display_name, email, phone, address,
        record_type_name,status_name, company
      } = req.body
      try {
        // Construct the data object from the request body
        const leadData = {
          // ...map your req.body fields to the API's expected format
            display_name,
            // Map other necessary fields from the form to the JobNimbus API fields
            record_type_name,
            status_name,
            // Example of mapping additional fields if the JobNimbus API requires them
            contacts: [{
                type: "Person",
                email,
                phone,
                addresses: [{ address }],
                company,
            }],
        };
  
        // Make an API request to JobNimbus
        const jobNimbusResponse = await fetch('https://app.jobnimbus.com/api1/contacts/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, // Ensure you store API keys securely
          },
          body: JSON.stringify(leadData),
          
        });
        console.log("received form data:", req.body);
  
        if (!jobNimbusResponse.ok) {
          throw new Error(`Error: ${jobNimbusResponse.status}`);
        }
  
        // Send a success response back to the front-end
        res.status(200).json({ message: 'Lead created successfully!' });
      } catch (error) {
        console.error('JobNimbus API error:', error);
        res.status(500).json({ message: error.message });
      }
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  