# GPlayer
A Unified Video Player &amp; Scheduler Works at the Front-end, Supports RTMP, HLS, MPEG-DASH...

It contains several components:

## Video.js based video player with multiple protocols support
### MP4
Handled by video.js
### RTMP
Fallback to Flash
### HLS
Fallback to Flash if the browser has no such capability
### MPEG-DASH
Backed by Google ShakaPlayer or DASH.js, or resort to HTML5 Media Source Extensions (MSE)

## Ping-delay and Speed-test functionality

## Multi-CDN backed Scheduler
Partially at the front-end

## Failover functionality

## Buffer Management

## Playback Manipulation

## P2P capability to reduce CDN cost
WebRTC Interface, interoperability with WebTorrent
