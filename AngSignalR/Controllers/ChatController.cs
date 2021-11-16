using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace AngSignalR.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly IHubContext<ChatHub> _hub;
        public ChatController(IHubContext<ChatHub> hub)
        {
            _hub = hub;
        }

        [HttpGet]
        public void Message()
        {
            //_hub.Clients.User();
            _hub.Clients.All.SendAsync("message", "my message 1");
        }
    }
}
