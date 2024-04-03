
// pages/api/create-lead.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Construct the data object from the request body
        const leadData = {
          // ...map your req.body fields to the API's expected format
        };
  
        // Make an API request to JobNimbus
        const jobNimbusResponse = await fetch('https://app.jobnimbus.com/api1/contacts/<jnid>', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.lujxzw7qghna6dqc}`, // Ensure you store API keys securely
          },
          body: JSON.stringify(leadData),
        });
  
        if (!jobNimbusResponse.ok) {
          throw new Error(`Error: ${jobNimbusResponse.status}`);
        }
  
        // Send a success response back to the front-end
        res.status(200).json({ message: 'Lead created successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  